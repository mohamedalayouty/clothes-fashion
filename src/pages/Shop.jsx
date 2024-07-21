import React from "react";
import { RiStarSFill } from "react-icons/ri";
import Footer from "./../Component/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Shop = ({ addProduct, products }) => {
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 mx-4 md:grid-cols-4">
        {products.map((product, index) => (
          <div key={index}>
            <Card className=" hover:bg-[#f1f5f9]">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {product.status}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {product.status1}
              </Typography>
              <CardHeader floated={false} className=" h-72 flex justify-center">
                <button onClick={() => addProduct(product)}>
                  <img
                    src={product.img}
                    alt="profile-picture"
                    className=" h-56 w-48"
                  />
                </button>
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  color="blue-gray"
                  className="font-medium text-[#0f172a]"
                  textGradient
                >
                  {product.description}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-[#0f172a]"
                  textGradient
                >
                  {product.name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-[#0f172a]"
                  textGradient
                >
                  {product.price}
                </Typography>
                <div className="flex text-yellow-500 items-center justify-center">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Shop;
