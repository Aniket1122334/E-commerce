import React, { useState, useEffect } from "react";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";
import Sort from "./Sort";

const Products = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleCheckboxChange = (event) => {
    setFilterVisible(event.target.checked);
  };

  // useEffect(() => {
  //   setFilterVisible(false);
  // }, []);

  return (
    <div className="products-box flex w-full  justify-center items-center  sm:p-4 ">
      <div className="inner-product w-full h-full flex flex-col sm:flex-row sm:justify-between  ">
        {/* __________________________________________________________________________________________________________ */}

        <div className="relative w-full sm:w-[15%] h-auto sm: flex justify-center flex-col items-center gap- p-4 sm:p-0 bg-slate-300">
          <input
            type="checkbox"
            id="filter-checkbox"
            className="sm:hidden top-4 left-4 z-10 w-[1.7rem] h-[1.7rem]"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="filter-checkbox"
            className="sm:hidden top-8 left-4 z-10 cursor-pointer capitalize text-[1.5rem] font-semibold"
          >
            Show Filters
          </label>

          {/* __________________________________________________________________________________________________________ */}
          <div
            className={`bg-slate-50 w-full h-auto sm:w-full sm:h-full flex flex-col justify-center items-start p-4 sm:p-0 ${
              isFilterVisible || window.innerWidth > 500 ? "block" : "hidden"
            }`}
          >
            <FilterSection />
          </div>
        </div>

        {/* __________________________________________________________________________________________________________ */}

        <div className="w-full sm:w-[85%] h-auto sm:h-full flex flex-col items-center justify-start">
          <div className="upper-portion w-full h-[3%] bg-slate-100 flex justify-center items-center rounded-xl">
            <Sort />
          </div>
          {/* __________________________________________________________________________________________________________ */}
          <div className="w-full h-auto p-4">
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
