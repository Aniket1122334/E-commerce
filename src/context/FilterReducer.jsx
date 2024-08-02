const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let data = action.payload.products || [];
      let priceArr = data.map((elem) => elem.price);

      // console.log(priceArr);

      // 1st way
      // console.log(Math.max.apply(null, priceArr));

      // 2nd way
      let maxPrice = priceArr.reduce(
        (initialVal, curVal) => Math.max(initialVal, curVal),
        0
      );
      // console.log(maxPrice);

      // 3rd way
      // let maxPrice = Math.max(...priceArr);
      // console.log(maxPrice);

      return {
        ...state,
        filter_products: action.payload.products,
        all_products: action.payload.products,
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        isProductLoading: true,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProducts = action.payload.products || [];

      let { filter_products, sorting_value } = state;
      let tempSortProducts = filter_products || [];

      // console.log(tempSortProducts);

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.category.localeCompare(b.category);
        }

        if (sorting_value === "z-a") {
          return b.category.localeCompare(a.category);
        }
      };

      newSortData = tempSortProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = all_products || [];

      const { text, category, brand, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((elem) => {
          return elem.category.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter((elem) => {
          return elem.category === category;
        });
      }
      if (brand) {
        tempFilterProduct = tempFilterProduct.filter((elem) => {
          return elem.brand === brand;
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((elem) => {
          return elem.price === price;
        });
      } else {
        tempFilterProduct = tempFilterProduct.filter((elem) => {
          return elem.price <= price;
        });
      }

      // console.log(state.filters);
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      // let data = action.payload.products || [];
      // let priceArr = data.map((elem) => elem.price);
      // let maxPrice = priceArr.reduce(
      //   (initialVal, curVal) => Math.max(initialVal, curVal),
      //   0

      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          brand: "",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
