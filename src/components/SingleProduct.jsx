import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "../context/Context";
import { FaTruckMoving } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import FormatPrice from "../Helpers/FormatPrice";
import MyImage from "./MyImage";
import { ColorRing } from "react-loader-spinner";
import StarSection from "./StarSection";
import AddCart from "./AddCart";

const API = "https://dummyjson.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useContext(context);
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  const {
    title,
    price,
    description,
    availabilityStatus,
    rating,
    images,
    category,
    shippingInformation,
    stock,
  } = singleProduct || {};

  return isSingleLoading ? (
    <div className="w-full h-full flex justify-center items-center">
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  ) : (
    <div className="flex flex-col md:flex-row w-full h-full p-4 md:p-8 ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <MyImage img={images} />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start p-4">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <div className="mt-2">
          <StarSection rating={rating} />
        </div>
        <h3 className="font-semibold text-xl mt-2 capitalize">
          MRP:{" "}
          <del>
            <FormatPrice price={price + 1} />
          </del>
        </h3>
        <h3 className="font-semibold text-2xl mt-2 text-[#4C39EF] capitalize">
          Deal of the day: <FormatPrice price={price} />
        </h3>
        <p className="mt-2 font-semibold text-lg">{description}</p>

        <div className="flex flex-wrap gap-4 mt-4">
          {/* Free Delivery */}
          <div className="flex flex-col justify-center items-center">
            <FaTruckFast className="text-[2rem] text-[#4C39EF] rounded-full bg-slate-300 p-2" />
            <h3 className="text-sm mt-1 capitalize">Free Delivery</h3>
          </div>

          {/* Pay On Delivery */}
          <div className="flex flex-col justify-center items-center">
            <MdAccountBalanceWallet className="text-[2rem] text-[#4C39EF] rounded-full bg-slate-300 p-2" />
            <h3 className="text-sm mt-1 capitalize">Pay On Delivery</h3>
          </div>

          {/* Secure Transaction */}
          <div className="flex flex-col justify-center items-center">
            <IoIosLock className="text-[2rem] text-[#4C39EF] rounded-full bg-slate-300 p-2" />
            <h3 className="text-sm mt-1 capitalize">Secure Transaction</h3>
          </div>

          {/* Shopeaze Delivered */}
          <div className="flex flex-col justify-center items-center">
            <FaTruckMoving className="text-[2rem] text-[#4C39EF] rounded-full bg-slate-300 p-2" />
            <h3 className="text-sm mt-1 capitalize">Shopeaze Delivered</h3>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 my-4"></div>

        <div className="flex flex-col">
          <h3 className="capitalize text-lg">
            Available: {availabilityStatus}
          </h3>
          <h3 className="text-lg capitalize">Category: {category}</h3>
          <h3 className="text-lg capitalize">
            Shipping Information: {shippingInformation}
          </h3>
        </div>

        <div className="w-full h-px bg-slate-200 my-4"></div>

        <div className="w-full flex mt-5">
          {stock > 0 && <AddCart product={singleProduct} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
