import React, { useContext } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { RiSubtractLine } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, amount, price, image, stock }) => {
  const { removeItem, setDecrease, setIncrease } = useContext(CartContext);

  return (
    <div className="grid grid-cols-5 gap-4 items-center py-4 border-b border-gray-200">
      {/* Image and Name */}
      <div className="flex items-center gap-4 pl-4">
        <figure className="hidden md:table-cell w-24 h-24 bg-slate-100 rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div>
          <p className="text-lg font-medium">{name}</p>
          <p className="text-sm font-semibold pt-1">In stock: {stock}</p>
        </div>
      </div>

      {/* Price */}
      <div className="flex justify-center items-center">
        <p className="hidden md:table-cell text-lg font-semibold">
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            className="text-2xl font-bold rounded-lg bg-slate-200 p-2 cursor-pointer"
            onClick={() => setDecrease(id)}
          >
            <RiSubtractLine />
          </button>
          <div className="text-lg font-bold">{amount}</div>
          <button
            className="text-2xl font-bold rounded-lg bg-slate-200 p-2 cursor-pointer"
            onClick={() => setIncrease(id)}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-center items-center">
        <p className="hidden md:table-cell text-lg font-semibold">
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* Remove */}
      <div className="flex justify-center items-center">
        <ImBin2
          className="text-2xl cursor-pointer text-red-600"
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
