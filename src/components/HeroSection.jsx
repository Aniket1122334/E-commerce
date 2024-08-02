import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/Context";

const HeroSection = () => {
  const { name, paragraph, image } = useContext(context);

  return (
    <div className="hero-section flex flex-col md:flex-row justify-between items-center p-8 bg-gradient-to-r from-purple-400 to-blue-500 h-auto md:h-[33rem] pl-[8rem] pr-[8rem]">
      <div className="left-section flex flex-col w-full md:w-[50%] text-center md:text-left mb-8 md:mb-0 py-7">
        <p className="uppercase text-[1.5rem] text-white animate-fadeIn">
          Welcome to
        </p>
        <h2 className="uppercase font-bold text-[2.5rem] md:text-[4rem] mt-[0.1rem] text-white animate-slideInLeft">
          {name}
        </h2>
        <p className="text-[1rem] md:text-[1.2rem] mt-[0.5rem] text-white animate-fadeIn p-[1rem]">
          {paragraph}
        </p>

        <Link to="/products">
          <button className="bg-[#6355EF] text-white h-[4rem] w-[12rem] mt-[2rem] uppercase rounded-xl hover:bg-[#424bf5] transition-transform transform hover:scale-105 duration-200 animate-bounce">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="right-section w-full md:w-[40%] h-auto flex justify-center items-center relative">
        <div className="z-20 transform md:translate-x-[35%] animate-slideInRight">
          <img
            className="hero-section-image w-[70%] h-[23rem] rounded-xl shadow-lg"
            src={image}
            alt="hero"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
