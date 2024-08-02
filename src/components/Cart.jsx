import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
import CartItem from "./CartItem";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } =
    useContext(CartContext);

  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="cart-container w-full min-h-screen p-4 ">
      {isAuthenticated && (
        <div className="cart-user flex items-center   gap-8 pl-[2rem]">
          <a href={user.picture} target="_blank">
            <img
              className="w-[8rem] rounded-xl"
              src={user.picture}
              alt={user.name}
            ></img>
          </a>

          <h2 className="cart-user-name flex justify-centeritems-center h-full text-[1.5rem] font-bold uppercase">
            {user.name}
          </h2>
        </div>
      )}

      {/* Cart Header */}
      <div className="cart-grid-section grid grid-cols-5 gap-4 text-center text-lg font-semibold mb-4 pt-10">
        <p>Item</p>
        <p className="hidden md:table-cell">Price</p>
        <p>Quantity</p>
        <p className="hidden md:table-cell">Subtotal</p>
        <p className="">Remove</p>
      </div>
      <hr className="border border-black mb-4" />

      {/* Cart Items */}
      <div className="cart-item mb-4">
        {cart.length === 0 ? (
          <p className="text-2xl text-center capitalize font-semibold mt-8 ">
            No items added to the cart!
          </p>
        ) : (
          cart.map((elem) => <CartItem key={elem.id} {...elem} />)
        )}
      </div>

      {/* Cart Actions */}
      <div className="bottom-button flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 mt-6">
        <Link to="/products" className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <button className="bg-[#574CD9] w-full p-4 rounded-xl text-lg text-white uppercase font-semibold">
            Continue Shopping
          </button>
        </Link>

        {cart.length > 0 && (
          <button
            className="bg-red-500 w-full md:w-1/2 lg:w-1/4 p-4 rounded-xl text-lg text-white uppercase font-semibold"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Cart Total */}
      {cart.length > 0 && (
        <div className="cart-total flex w-full items-center justify-center mt-8">
          <div className="cart-total-sum w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-xl p-4">
            <div className="grid grid-rows-3 gap-4 bg-slate-100 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-lg font-bold">Subtotal:</div>
                <div className="text-lg font-medium">
                  <FormatPrice price={total_price} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-lg font-bold">Shipping Fees:</div>
                <div className="text-lg font-medium">
                  <FormatPrice price={shipping_fee} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t-2 border-t-slate-300 pt-4">
                <div className="text-lg font-bold">Total Price:</div>
                <div className="text-lg font-medium">
                  <FormatPrice price={shipping_fee + total_price} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
