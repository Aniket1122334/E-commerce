import { createContext, useContext, useEffect, useReducer } from "react";
import { context } from "./Context";
import FilterReducer from "./FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  isProductLoading: false,
  sorting_value: "a-z",
  filters: {
    text: "",
    category: "All",
    brand: "",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useContext(context);
  // console.log(products);

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  // grid view setting

  const setGridview = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  const setListview = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting-function

  const sorting = (event) => {
    let userValue = event.target.value;
    // console.log(userValue);
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  useEffect(() => {
    dispatch({ type: "SET_PRODUCT_LOADING" });
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // sort the products

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  // update filter sections
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({
      type: "UPDATE_FILTER_VALUE",
      payload: {
        name,
        value,
      },
    });
  };

  // clear the filter

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridview,
        setListview,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
