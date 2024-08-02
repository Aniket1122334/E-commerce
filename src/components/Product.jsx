import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (elem) => {
  const { id, images, price, category } = elem;

  // console.log(elem);

  return (
    <div className="product-section w-[30%] h-[28rem] bg-slate-200 rounded-xl cursor-pointer overflow-hidden relative flex items-center justify-center element">
      <Link to={`/singleProduct/${id}`}>
        <div className="card flex flex-col justify-center items-center w-[100%] h-[1rem]">
          <figure className="relative w-[100%] h-[50rem] flex items-end justify-center">
            <img
              className="w-[70%] h-[70%]"
              src={images[0]}
              alt={category}
            ></img>

            <figcaption className="caption absolute  top-4 left-[55%] flex justify-center bg-white w-[7rem] p-[0.5rem] rounded-full z-30 font-bold">
              {category}
            </figcaption>
          </figure>

          <div className="card-data flex items-center">
            <div className="flex items-center justify-center w-full pl-[1rem] pr-[1rem] h-[2.7rem]">
              <p className="font-bold">
                <FormatPrice price={price} />
              </p>
            </div>
          </div>
        </div>

        <div className="animation w-[0%] h-[100%] bg-[#fdfdfd7d] absolute left-0 top-0"></div>
      </Link>
    </div>
  );
};

export default Product;
