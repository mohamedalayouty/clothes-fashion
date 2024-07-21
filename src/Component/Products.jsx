import React from "react";
import shirt from "../photo/shirt.jpeg";
import trouser from "../photo/cotton-trouser-1000x1000.jpg";
import glass2 from "../photo/glass-2.jpeg";
import bag from "../photo/bag.jpeg";
import { RiStarSFill } from "react-icons/ri";

const Products = () => {
  return (
    <>
      <div className="my-8 grid grid-cols-4 gap-4 mx-4 relative">
        <div>
          <span className=" bg-green-700 px-2 absolute">SALE</span>
          <img className="mb-3" src={shirt} alt="" />
          <h1 className=" text-slate-800">Activ means</h1>
          <h1 className="text-slate-800">CREW-NECK SHIRT</h1>
          <div className="flex text-yellow-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="text-slate-800">200$</p>
        </div>

        <div>
          <span className="bg-yellow-500 px-2 absolute">SALE</span>
          <img className="mb-3" src={trouser} alt="" />
          <h1 className="text-slate-800">Black Pockets Plain Slim Fit</h1>
          <h1 className="text-slate-800">Jeans Pants</h1>
          <div className="flex text-yellow-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="text-slate-800">290$</p>
        </div>

        <div>
          <span className="bg-red-700 px-2 absolute">SALE</span>
          <img className="mb-3" src={glass2} alt="" />
          <h1 className="text-slate-800">Glasses Beautiful</h1>
          <div className="flex text-yellow-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="text-slate-800">390$</p>
        </div>

        <div>
          <span className="bg-black px-2 text-white absolute">NEW</span>
          <img className="mb-3" src={bag} alt="" />
          <h1 className="text-slate-800">Bag grocery</h1>
          <div className="flex text-yellow-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="text-slate-800">160$</p>
        </div>
      </div>
    </>
  );
};

export default Products;
