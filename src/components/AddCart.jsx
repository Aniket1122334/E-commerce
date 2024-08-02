import React, { useContext, useState } from "react";
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const AddCart = ({ product }) => {
  const { id, stock } = product;
  const { addToCart } = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prevAmount) => (prevAmount < stock ? prevAmount + 1 : stock));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
      {/* Amount Toggle */}
      <div className="flex items-center justify-between gap-4">
        <button
          className="text-2xl font-bold rounded-lg bg-slate-200 p-2 flex items-center justify-center cursor-pointer"
          onClick={setDecrease}
        >
          <RiSubtractLine />
        </button>
        <div className="text-xl font-bold">{amount}</div>
        <button
          className="text-2xl font-bold rounded-lg bg-slate-200 p-2 flex items-center justify-center cursor-pointer"
          onClick={setIncrease}
        >
          <IoMdAdd />
        </button>
      </div>

      {/* Add to Cart Button */}
      <Link to="/cart" onClick={() => addToCart(id, amount, product)}>
        <button className="bg-[#6354F2] w-full py-3 text-lg text-white uppercase rounded-xl shadow-lg shadow-[#786ddb] hover:bg-[#786ddb] transition duration-300">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default AddCart;
