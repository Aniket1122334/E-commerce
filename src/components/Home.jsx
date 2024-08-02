import React, { useContext, useEffect } from "react";
import HeroSection from "./HeroSection";
import { context } from "../context/Context";
import Services from "./Services";
import Partner from "./Partner";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  const { updatePage } = useContext(context);

  useEffect(() => {
    updatePage(
      "Shopeaze",
      "Welcome to ShopEaze, where convenience meets variety! Our platform offers a seamless shopping experience, bringing you a wide range of products from trusted brands. Whether you're looking for the latest fashion trends, cutting-edge electronics, or home essentials, ShopEaze has it all.",
      "/images/shopping.jpg"
    );
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Services />
      <Partner />
    </>
  );
};

export default Home;
