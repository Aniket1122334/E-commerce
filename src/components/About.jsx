import React, { useContext, useEffect } from "react";
import HeroSection from "./HeroSection";
import { context } from "../context/Context";

const About = () => {
  const { updatePage } = useContext(context);

  useEffect(() => {
    updatePage(
      "about us",
      "At ShopEaze, we believe in making shopping effortless and enjoyable. Founded with the vision to revolutionize the online shopping experience, we bring you an extensive collection of products from top brands across various categories. Our user-friendly platform ensures a seamless shopping journey, from browsing to checkout.",
      "/images/about.jpg"
    );
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;
