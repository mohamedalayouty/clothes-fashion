import React from "react";
import img from "../photo/empty-shopping.jpg";
import { Button } from "@material-tailwind/react";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiArchiveBox } from "react-icons/hi2";

const Cart = ({ productCart, setProductCart }) => {
  let decreament = (product) => {
    let productmins = productCart.map((obj) => {
      if (product.id == obj.id) {
        if (product.num > 1) {
          obj.num--;
        }
      }
      return obj;
    });
    setProductCart(productmins);
  };

  let increament = (product) => {
    let productplus = productCart.map((obj) => {
      if (product.id == obj.id) {
        obj.num++;
      }
      return obj;
    });
    setProductCart(productplus);
  };

  let deleteProductCart = (obj) => {
    let deleteProduct = productCart.filter((product) => {
      if (product.id !== obj.id) {
        return product;
      }
    });
    setProductCart(deleteProduct);
  };

  return (
    <div className="flex justify-evenly mx-4">
      <div className="w-3/4 mt-4 flex flex-col">
        {productCart.length === 0 ? (
          <div className="flex flex-col items-center lg:w-3/4">
            <img src={img} alt="" className="w-2/3 lg:w-1/2" />
            <Link to="/shop">
              <Button size="sm" className="bg-green-700">
                SHOP NOW
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            {productCart.map((product, index) => (
              <div
                key={index}
                className="lg:flex lg:flex-row lg:gap-8 flex-col me-4 gap-4 items-center font-bold"
              >
                <button>
                  <img
                    className="mb-3 lg:w-52 w-auto"
                    src={product.img}
                    alt=""
                    loading="lazy"
                  />
                </button>
                <div className="flex lg:gap-8 ms-12 gap-4">
                  <div className="flex flex-col text-sm">
                    <h1 className=" text-[#3d4b5e]">{product.description}</h1>
                    <h1 className="text-[#3d4b5e]">{product.name}</h1>
                    <h1 className="text-[#3d4b5e]">{product.price}</h1>
                  </div>
                  <div className="flex gap-8 items-center">
                    <Button
                      onClick={() => decreament(product)}
                      className="bg-white text-[#3d4b5e] text-lg"
                    >
                      -
                    </Button>
                    <h1>{product.num}</h1>
                    <Button
                      onClick={() => increament(product)}
                      className="bg-white text-[#3d4b5e] text-lg"
                    >
                      +
                    </Button>
                    <h1 className="text-[#3d4b5e]">
                      {parseInt(product.price) * product.num} $
                    </h1>
                    <button onClick={() => deleteProductCart(product)}>
                      <HiArchiveBox className="text-[#3d4b5e] text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-1/2 bg-gray-200 mt-4 py-4 px-4 flex flex-col me-4">
        <h1 className="font-bold text-[#3d4b5e] text-md">CART TOTAL</h1>
        <div className="flex justify-between text-lg">
          <h1 className="font-bold text-[#3d4b5e] my-1 ">
            {productCart.length > 0 &&
              productCart
                .map((product) => parseInt(product.price) * product.num)
                .reduce((one, two) => one + two)}
            $
          </h1>
          <MdOutlinePayment className="mt-2" />
        </div>
        <Button className=" bg-[#475569] px-20 py-2">Pay</Button>
      </div>
    </div>
  );
};

export default Cart;
