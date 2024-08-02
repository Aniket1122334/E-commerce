import React, { useContext } from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FilterContext } from "../context/FilterContext";

const Sort = () => {
  const {
    filter_products = [],
    grid_view,
    setGridview,
    setListview,
    sorting,
  } = useContext(FilterContext);

  return (
    <div className="sort-box w-full flex flex-col justify-between items-center h-full px-6 py-4">
      <div className="grid-list-view flex gap-4 pb-[1rem]">
        <button
          onClick={setGridview}
          aria-label="Grid View"
          className={`w-12 h-12 flex justify-center items-center rounded-lg ${
            grid_view ? "bg-black" : "bg-white"
          }`}
        >
          <IoGrid
            className={`text-2xl ${grid_view ? "text-white" : "text-black"}`}
          />
        </button>

        <button
          onClick={setListview}
          aria-label="List View"
          className={`w-12 h-12 flex justify-center items-center rounded-lg ${
            grid_view ? "bg-white" : "bg-black"
          }`}
        >
          <FaThList
            className={`text-2xl ${grid_view ? "text-black" : "text-white"}`}
          />
        </button>
      </div>

      <h3 className="flex justify-center items-center capitalize font-semibold text-xl">
        {`${filter_products.length} product${
          filter_products.length > 1 ? "s" : ""
        } available`}
      </h3>

      <div className="sort-selection pt-[1rem]">
        <form>
          <label htmlFor="sort" className="sr-only">
            Sort products
          </label>
          <select
            onChange={sorting}
            name="sort"
            id="sort"
            className="border border-slate-600 rounded-lg w-40 p-2"
          >
            <option value="a-z">Category (A-Z)</option>
            <option value="highest">Price (Highest)</option>
            <option value="lowest">Price (Lowest)</option>
            <option value="z-a">Category (Z-A)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
