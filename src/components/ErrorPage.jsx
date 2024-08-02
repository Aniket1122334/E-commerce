import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#F0F4F8]">
      <div className="flex flex-col items-center text-center">
        <img
          className="w-3/4 md:w-1/2 h-auto mb-6"
          src="/images/error.jpg"
          alt="Error"
        />
        <p className="text-2xl font-semibold mb-6 text-gray-700">
          Oops! Something went wrong.
        </p>
        <div className="flex flex-wrap px-8 gap-4">
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Home
            </button>
          </Link>

          <Link to="/about">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              About
            </button>
          </Link>

          <Link to="/products">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Products
            </button>
          </Link>

          <Link to="/contact">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
