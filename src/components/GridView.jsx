import React from "react";
import Product from "./Product";
import { ColorRing } from "react-loader-spinner";

const GridView = ({ products = [], isProductLoading }) => {
  // console.log(products);
  // console.log(state);

  return (
    <div className="grid-inner-container flex flex-wrap items-center justify-center gap-5">
      {products.map((elem) => {
        return <Product key={elem.id} {...elem} />;
      })}
    </div>
  );
};

export default GridView;
