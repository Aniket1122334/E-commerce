import React, { useContext } from "react";
import { context } from "../context/Context";
import { ColorRing } from "react-loader-spinner";
import Product from "./Product";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useContext(context);
  // console.log(featureProducts);

  return (
    <div className="feature-box flex w-full min-h-[40rem] bg-[#F6F8FA] justify-center items-center pt-[4rem] ">
      <div className="inner-featured-box flex flex-col w-[80%] h-[40rem] p-[2rem]">
        <div className="feature-heading">
          <p className="uppercase text-[1.3rem] pl-[0.4rem]">check now!</p>
          <h2 className="capitalize text-[4rem] font-bold">
            our feature products
          </h2>
        </div>

        {/*________________________________________________________  */}
        <div
          className={
            isLoading
              ? "boxes w-full h-full flex items-center justify-center gap-3"
              : "boxes w-full h-full flex items-center p-3 gap-3 feature-products-image-section "
          }
        >
          {isLoading ? (
            <ColorRing
              visible={true}
              height="100"
              width="100"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <>
              {featureProducts.map((elem) => (
                <Product key={elem.id} {...elem} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
