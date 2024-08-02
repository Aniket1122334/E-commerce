import { createContext, useEffect, useReducer } from "react";

import axios from "axios";

import Reducer from "./Reducer";

const initialState = {
  name: "",
  paragraph: "",
  image: "",
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const API = "https://dummyjson.com/products";

const context = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // __________________________________________________________________________________________________________

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      dispatch({ type: "SET_API_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "API_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  // __________________________________________________________________________________________________________

  const updatePage = (name, para, img) => {
    return dispatch({
      type: "UPDATE_PAGE",
      payload: {
        name: name,
        paragraph: para,
        image: img,
      },
    });
  };

  // __________________________________________________________________________________________________________

  return (
    <context.Provider value={{ ...state, updatePage, getSingleProduct }}>
      {children}
    </context.Provider>
  );
};

export { context, AppProvider };
