import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="header-box flex justify-between items-center w-full bg-[#F6F8FA] pl-[3rem] pr-[4rem] h-[8rem]">
        <Link to="/">
          <div className="img-box">
            <img
              className="logo w-[9rem]  rounded-full cursor-pointer"
              src="/images/logo.jpg"
            ></img>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
