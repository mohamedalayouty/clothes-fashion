import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

const ProductDetails = () => {
  let { productId } = useParams();
  let navigate = useNavigate();
  let [name, setname] = useState("");
  let [description, setdescription] = useState("");
  let [price, setPrice] = useState("");
  let [img, setimg] = useState("");
  let [checkname, setcheckname] = useState(true);

  let getDataProductsDetails = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `http://localhost:4000/products/${productId}`,
      });
      setname(data.data.name);
      setdescription(data.data.description);
      setPrice(data.data.price);
      setimg(data.data.img);
    } catch (eror) {
      setname("Product Not Found");
    }
  };

  let handleform = (e) => {
    e.preventDefault();
    if (name == "") {
      return;
    } else {
      setcheckname(false);
      setTimeout(() => {
        navigate("/makers");
      }, 2000);
      axios({
        method: "patch",
        url: `http://localhost:4000/products/${productId}`,
        data: {
          name: name,
          description: description,
          price: price,
          img: img,
        },
      });
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
      <Card className="mt-12 w-96 text-center">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={`${img}`} alt="card-image" />
        </CardHeader>
        <CardBody className="flex flex-col text-black">
          <form onSubmit={(e) => handleform(e)}>
            <div>
              <label className="me-2">Name</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">description</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">Price</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="text-sm me-2 p-1">Image</label>
              <input
                onChange={(e) => setimg(e.target.value)}
                className="px-1"
                type="url"
                placeholder=""
                value={img}
              />
            </div>
            <div className="flex flex-col items-center">
              {checkname === true ? (
                <Button type="submit" className="mt-2">
                  Edit
                </Button>
              ) : (
                <Spinner className="mt-2 text-red-700 font-bold" />
              )}
            </div>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={() => navigate(-1)}>Back To Markes</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;
