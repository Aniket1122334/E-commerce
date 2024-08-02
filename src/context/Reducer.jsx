const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PAGE":
      return {
        ...state,
        name: action.payload.name,
        paragraph: action.payload.paragraph,
        image: action.payload.image,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const FeatureData = action.payload.products.filter((currentElem) => {
        return currentElem.rating > 4.0 && currentElem.rating < 4.4;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: FeatureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "API_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default Reducer;
