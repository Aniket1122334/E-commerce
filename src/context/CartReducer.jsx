const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, amount, product } = action.payload;
      let existingProduct = state.cart.find(
        (elem) => elem.id === id + product.price
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((elem) => {
          if (elem.id === id + product.price) {
            let newAmount = elem.amount + amount;

            if (newAmount >= elem.stock) {
              newAmount = elem.stock;
            }

            return {
              ...elem,
              amount: newAmount,
            };
          } else {
            return elem;
          }
        });

        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + product.price,
          name: product.title,
          amount,
          image: product.images[0],
          price: product.price,
          stock: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((elem) => elem.id !== action.payload);

      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_DECREMENT":
      let decreasedCart = state.cart.map((elem) => {
        if (elem.id === action.payload) {
          //   console.log(elem);

          let decrementAmount = elem.amount - 1;

          if (decrementAmount <= 1) {
            decrementAmount = 1;
          }
          return {
            ...elem,
            amount: decrementAmount,
          };
        } else {
          return elem;
        }
      });

      return {
        ...state,
        cart: decreasedCart,
      };

    case "SET_INCREMENT":
      let increasedCart = state.cart.map((elem) => {
        if (elem.id === action.payload) {
          let newAmount = elem.amount + 1;

          if (newAmount > elem.stock) {
            newAmount = elem.stock;
          }

          return {
            ...elem,
            amount: newAmount,
          };
        }
        return elem;
      });

      return {
        ...state,
        cart: increasedCart,
      };

    case "CART_TOTAL_ITEM":
      let updatedItemVal = state.cart.reduce((initialVal, elem) => {
        let { amount } = elem;

        initialVal = initialVal + amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_items: updatedItemVal,
      };

    case "CART_TOTAL_PRICE":
      let total_price = state.cart.reduce((initialVal, elem) => {
        let { price, amount } = elem;

        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);

      return {
        ...state,
        total_price,
      };

    default:
      return state;
  }
};

export default CartReducer;
