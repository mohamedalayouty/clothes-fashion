import React from "react";
import img from "../photo/1.jpeg";
import imgFooter from "../photo/payment.png";
import imgWhite from "../photo/white.jpeg";
import shapeOne from "../photo/1-removebg-preview.png";
import shapeTwo from "../photo/2-removebg-preview.png";
import shapeThree from "../photo/3-removebg-preview.png";
import shapeFour from "../photo/4-removebg-preview.png";
import { FaRegMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0f172a] text-white relative h-[100vh] lg:h-[65vh] md:h-[65vh]">
        <div className="mx-6 grid grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-4">
          <div className="mt-12">
            <div className="relative mb-8">
              <img src={img} alt="" className=" absolute" />
              <img src={imgWhite} alt="" />
            </div>
            <h1 className="mb-4 text-sm">
              The customer is at the heart of our uniqe business model, which
              includes design.
            </h1>
            <div className="">
              <img src={imgFooter} alt="" />
            </div>
          </div>

          <div className="mt-12 ms-4">
            <h1 className="text-xl font-semibold mb-4">SHOPPING</h1>
            <h1>Home</h1>
            <h1>Shop</h1>
            <h1>About Us</h1>
          </div>

          <div className="mt-12 font-semibold mb-4">
            <h1 className="text-xl">PARTNER</h1>
            <div className="flex mt-4">
              <img src={shapeOne} alt="" className="me-6" />
              <img src={shapeTwo} alt="" />
            </div>
            <div className="flex mt-4">
              <img src={shapeThree} alt="" className="me-6" />
              <img src={shapeFour} alt="" />
            </div>
          </div>

          <div className="mt-12 font-semibold">
            <h1 className="text-xl mb-8">NEWLETTER</h1>
            <h1 className="text-sm mb-8">
              Be the first to know about new arrivals, look books, salse &
              promos!
            </h1>
            <div className="flex relative items-center w-fit">
              <input
                type="text"
                placeholder="Your email"
                className=" border-b-2 bg-[#0f172a] py-3 outline-none"
              />
              <FaRegMessage className=" absolute right-0" />
            </div>
          </div>
        </div>
        <hr className=" w-3/4 absolute mt-3" />
        <div className=" absolute copy bottom-0">
          <h1 className="">Copyright @ 2023 & 2020</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
