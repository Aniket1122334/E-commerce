import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ListView = ({ products = [] }) => {
  return (
    <div className="list-view-box flex flex-col gap-6 w-full">
      {products.map((elem) => {
        const { id, images, price, category, description } = elem;

        return (
          <div
            key={id}
            className="list-image-grid flex items-center justify-between border border-gray-300 rounded-lg shadow-lg p-4 bg-white"
          >
            <figure className="relative w-1/4 h-40 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                className="object-cover w-[11rem]"
                src={images[0]}
                alt={category}
              />
            </figure>

            <div className="list-view-data w-3/4 flex flex-col justify-between px-4">
              <h3 className="text-xl font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded-md uppercase">
                {category}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                <FormatPrice price={price} />
              </p>
              <p className="text-base text-gray-600 mt-2">
                {description.length > 50
                  ? `${description.slice(0, 50)}...`
                  : description}
              </p>
              <Link to={`/singleProduct/${id}`}>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
