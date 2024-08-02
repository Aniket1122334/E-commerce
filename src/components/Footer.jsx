import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 py-8">
        <div className="bg-[#F6FAFB] flex justify-between items-center w-full max-w-4xl mx-auto px-6 py-4 shadow-lg rounded-lg  translate-y-20">
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-semibold text-gray-700">
              Ready to get started? <br />
              Talk to us today
            </p>
          </div>
          <Link to="/products">
            <button className="bg-[#6354F2] px-6 py-2 rounded-full text-white uppercase font-semibold transition-transform transform hover:scale-105">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      <footer className="bg-[#06132D] text-white py-20 ">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <p className="text-sm md:text-base">
                Thank you for choosing our products. We appreciate your trust
                and look forward to serving you again soon.
              </p>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
              <p className="text-sm mb-4">
                Get important updates delivered to your inbox.
              </p>
              <form
                action="https://formspree.io/f/mgvwoeqv"
                method="POST"
                className="flex flex-col"
              >
                <input
                  className="p-3 mb-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-black"
                  type="email"
                  name="subscribed"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                />
                <button
                  className="bg-[#574CD9] px-4 py-2 rounded-md text-white font-semibold transition-transform transform hover:scale-105"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-2 text-center pb-[1rem]">
                Follow Us On:
              </h4>
              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="https://www.instagram.com/aniket_verma_op/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FE1383] transition-transform transform hover:scale-110"
                >
                  <FaInstagram size={40} />
                </a>
                <a
                  href="https://x.com/Aniketverma_op"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
                >
                  <FaXTwitter size={40} />
                </a>
                <a
                  href="https://github.com/Aniket1122334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#333] transition-transform transform hover:scale-110"
                >
                  <FaGithub size={40} />
                </a>
              </div>
            </div>

            <div className="md:col-span-1 ">
              <h4 className="text-lg font-semibold mb-2">Call Us</h4>
              <p className="text-sm">+91 9871587106</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B2A] py-4">
          <div className="container mx-auto flex justify-between items-center text-sm text-gray-400 gap-10">
            <p>
              © 2024 GadgetGate.
              <br /> All Rights Reserved
            </p>
            <div className="space-x-4 flex">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition text-[1rem]">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
