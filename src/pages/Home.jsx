import React from "react";
import imgjacket from "../photo/jacket.jpeg";
import imgshose from "../photo/shose.jpeg";
import imgglass from "../photo/galss-1.jpeg";
import Products from "../Component/Products";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      <>
        <div className="bg-img w-full h-[90vh] flex items-center">
          <div className=" flex-column ms-12 leading-loose">
            <p className="text-red-500 text-sm font-medium mb-2">
              SUMMER COLLECTION
            </p>
            <h1 className="font-semibold text-2xl">Fall - Winter</h1>
            <h1 className="font-semibold text-2xl mb-2">Collections 2023</h1>
            <p className=" w-48 sm:w-96 text-sm text-gray-800 mb-2">
              A specialist label creating luxury essentials. Ethically crafted
              with can underwairing commitment to excaptional qaulity
            </p>
            <button className=" bg-red-700 px-4 py-1 text-white text-sm mt-2">
              SHOP NOW -{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row mt-8 md:justify-center ms-8">
          <div className="flex-col items-center">
            <img className="md:w-80 w-3/4 ms-8 md:ms-0" src={imgglass} alt="" />
            <div className="text-center md:text-start">
              <h1 className="text-xl">Accessoreis</h1>
              <a href="" className="text-sm text-decoration: underline">
                SHOP NOW
              </a>
            </div>
          </div>

          <div className="flex-column md:mt-0 mt-4">
            <div className="flex flex-col-reverse md:flex-row items-center md:ms-4 justify-center">
              <div>
                <h1 className="text-xl">Clothing</h1>
                <h1 className="text-xl">Collection 2023</h1>
                <a href="" className="text-sm text-decoration: underline">
                  SHOP NOW
                </a>
              </div>
              <img
                className="md:w-64 w-3/4 mb-8 me-12"
                src={imgjacket}
                alt=""
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center">
              <div>
                <h1 className="text-xl">Shoes Spring</h1>
                <h1 className="text-xl">2023</h1>
                <a href="" className="text-sm text-decoration: underline">
                  SHOP NOW
                </a>
              </div>
              <img className="md:w-80" src={imgshose} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-line mt-8 h-8 relative">
          <div className="absolute w-full h-8 bg-[#44403c] opacity-80"></div>
          <h1 className="text-white absolute ship">
            Free Shipping, 30-day return or refund gaurantee.
          </h1>
        </div>
      </>
      <>
        <Products />
        <Footer />
      </>
    </>
  );
};

export default Home;
