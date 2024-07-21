import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";

const ViewProduct = () => {
  let [productstwo, setProductstwo] = useState(null);
  let { productId } = useParams();
  let navigate = useNavigate();

  let getDataProductsDetails = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `http://localhost:4000/products/${productId}`,
      });
      setProductstwo(data.data);
    } catch (eror) {
      setProductstwo("Product Not Found");
    }
  };

  useEffect(() => {
    getDataProductsDetails();
  }, []);

  if (isNaN(productId)) {
    return <NotFound />;
  }

  return (
    <div className="flex items-center justify-center">
      {productstwo && typeof productstwo !== "string" ? (
        <Card className="mt-12 w-96 text-center">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={`${productstwo.img}`} alt="card-image" />
          </CardHeader>
          <CardBody className="">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Name : {productstwo.name}
            </Typography>
            <Typography variant="h6">
              description : {productstwo.description}
            </Typography>
            <Typography variant="h6">Price : {productstwo.price}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => navigate(-1)}>Back To Markes</Button>
          </CardFooter>
        </Card>
      ) : (
        <h1>{productstwo}</h1>
      )}
    </div>
  );
};

export default ViewProduct;
