import React, { useContext, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { total_items } = useContext(CartContext);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const [active, setActive] = useState(false);

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <ul className="navbar-list flex items-center gap-14 uppercase text-[1.3rem]">
        <Link to="/">
          <li
            className="font-semibold hover:text-[#6355EF] transition-all duration-200"
            onClick={() => setActive(false)}
          >
            Home
          </li>
        </Link>

        <Link to="/about">
          <li
            className="font-semibold hover:text-[#6355EF] transition-all duration-200"
            onClick={() => setActive(false)}
          >
            About
          </li>
        </Link>

        <Link to="/products">
          <li
            className="font-semibold hover:text-[#6355EF] transition-all duration-200"
            onClick={() => setActive(false)}
          >
            Products
          </li>
        </Link>

        <Link to="/contact">
          <li
            className="font-semibold hover:text-[#6355EF] transition-all duration-200"
            onClick={() => setActive(false)}
          >
            Contact
          </li>
        </Link>

        {isAuthenticated && (
          <h2 className="font-bold text-orange-600 text-[1.7rem]">
            Hello! {user.name}
          </h2>
        )}

        {isAuthenticated ? (
          <li>
            <button
              className="bg-[#6355EF] text-white h-[4rem] w-[6rem] uppercase rounded-xl hover:bg-[#424bf5] transition-all duration-200"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button
              className="bg-[#6355EF] text-white h-[4rem] w-[6rem] uppercase rounded-xl hover:bg-[#424bf5] transition-all duration-200"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </li>
        )}

        <Link to="/cart" className="relative">
          <li>
            <SlBasket className="text-[1.8rem]" />
            <span
              className="absolute top-[-90%] left-[70%] bg-[#9EA2F6] rounded-full w-[2rem] h-[2rem] items-center flex justify-center"
              onClick={() => setActive(false)}
            >
              {total_items}
            </span>
          </li>
        </Link>
      </ul>

      <div
        className={active ? "mobile-navbar-btn active" : "mobile-navbar-btn"}
      >
        <FaBars className="mobile-nav-icon" onClick={() => setActive(true)} />
        <IoCloseSharp
          className="mobile-nav-icon close"
          onClick={() => setActive(false)}
        />
      </div>
    </div>
  );
};

export default Navbar;
