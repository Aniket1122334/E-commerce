import { createContext, useEffect, useReducer } from "react";
import reducer from "./CartReducer";

const CartContext = createContext();

const getLocALCartData = () => {
  let localCartData = localStorage.getItem("shopeazeCart");
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocALCartData(),
  total_items: 0,
  total_amount: 0,
  total_price: 0,
  shipping_fee: 0.3,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("shopeazeCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
