import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";

const AddNewPoduct = () => {
  let [name, setname] = useState("");
  let [description, setdescription] = useState("");
  let [price, setPrice] = useState("");
  let [img, setimg] = useState("");
  let [num, setnum] = useState("");
  let [status, setstatus] = useState("");
  let [check, setcheck] = useState(false);
  let navigate = useNavigate();

  let handleform = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      img === "" ||
      price === "" ||
      description === "" ||
      num === "" ||
      status === ""
    ) {
      return;
    } else {
      axios({
        method: "post",
        url: "http://localhost:4000/products",
        data: {
          status,
          img,
          description,
          name,
          price,
          num,
        },
      });
      setcheck(true);
      setTimeout(() => {
        navigate("/makers");
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="mt-8 w-80 text-center bg-blue-gray-100 p-6 mb-4">
        <form onSubmit={(e) => handleform(e)}>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              Name
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              description
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              Price
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              Status
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={status}
              onChange={(e) => setstatus(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              num
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={num}
              onChange={(e) => setnum(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              Image
            </label>
            <input
              onChange={(e) => setimg(e.target.value)}
              className="px-1 p-1 rounded-md"
              type="url"
              placeholder=""
              value={img}
            />
          </div>
          <div className="flex flex-col items-center">
            {check === false ? (
              <Button type="submit" className="mt-4 bg-black">
                Submit
              </Button>
            ) : (
              <Spinner className="mt-2 text-red-700 font-bold" />
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddNewPoduct;
