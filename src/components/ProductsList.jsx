import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductsList = () => {
  const { filter_products, isProductLoading, grid_view } =
    useContext(FilterContext);

  if (grid_view === true) {
    return (
      <GridView
        products={filter_products}
        isProductLoading={isProductLoading}
      />
    );
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductsList;
