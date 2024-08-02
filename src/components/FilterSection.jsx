import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, maxPrice, minPrice, price },
    updateFilterValue,
    clearFilters,
    all_products = [],
  } = useContext(FilterContext);

  //   Get unique data

  const gettUniqueData = (data, property) => {
    let newVal = data.map((elem) => {
      return elem[property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
    // console.log(newVal);
  };

  const gettUniqueBrand = (data, property) => {
    let newVal = data.map((elem) => {
      return elem[property];
    });
    return (newVal = ["", ...new Set(newVal)].slice(0, 15));
  };

  //   unique data

  const categoryOnlyData = gettUniqueData(all_products, "category");

  const brandOnlyData = gettUniqueBrand(all_products, "brand");

  //   console.log(brandOnlyData);

  return (
    <>
      <div className="filter-search flex flex-col justify-start items-start w-full h-full pt-[5rem] pl-[1.6rem]">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="p-[0.5rem] pl-[1rem] w-full rounded-lg"
            type="text"
            name="text"
            value={text}
            placeholder="SEARCH"
            onChange={updateFilterValue}
          ></input>
        </form>

        <div className="filter-category pt-[1.5rem] w-full justify-center items-start flex flex-col">
          <h3 className="text-[1.5rem] font-semibold uppercase">Category</h3>
          <div className="flex flex-col gap-[2rem] pt-[1rem]">
            {categoryOnlyData.map((elem, index) => {
              return (
                <button
                  className="flex flex-col uppercase font-medium text-[1.1rem]"
                  key={index}
                  type="button"
                  name="category"
                  value={elem}
                  onClick={updateFilterValue}
                >
                  {elem}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full pt-[1.5rem]">
          <form action="#">
            <label htmlFor="brands"></label>
            <select
              className="w-[75%] h-[2rem] rounded-lg"
              name="brand"
              id="brand"
              onClick={updateFilterValue}
            >
              {brandOnlyData
                .filter((elem) => elem !== undefined)
                .map((elem, index) => {
                  return (
                    <option key={index} name="brand" value={elem}>
                      {elem}
                    </option>
                  );
                })}
            </select>
          </form>
        </div>

        <div className="filter_price w-full pt-[1rem] uppercase">
          <h3 className="text-[1.5rem] font-semibold">Price</h3>
          <p className="pt-[1rem] text-[1.1rem] font-medium">
            <FormatPrice price={price} />
          </p>

          <input
            className="mt-[1rem] w-[75%]"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          ></input>
        </div>

        <div className="filter-section mt-[1.5rem]">
          <button
            className="bg-[#574CD9] uppercase p-4 text-[1.1rem] rounded-xl text-white font-semibold hover:bg-[#291db0] transition"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
