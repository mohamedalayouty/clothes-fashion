import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import axios from "axios";

const Maindash = ({ products }) => {
  const [userMainDash, setUserMainDash] = useState([]);

  let getDataUser = async () => {
    let data = await axios({
      method: "get",
      url: "http://localhost:4000/users",
    });
    setUserMainDash(data.data);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="flex gap-12">
      <div className=" bg-[#121c31] h-[87vh] w-1/6 flex flex-col items-center justify-evenly">
        <Sidebar />
      </div>
      <div className="flex justify-center items-center gap-10 w-3/4 text-white font-bold text-xl">
        {userMainDash.length > 0 && (
          <div className="bg-[#121c31] w-1/2 flex flex-col items-center gap-8 p-6 rounded">
            <h1 className="text-blue-600 text-3xl">Users</h1>
            <h1>
              Number Of Users :{" "}
              <span className="text-green-400">{userMainDash.length}</span>
            </h1>
            <h1>
              Last Users Registed Is :{" "}
              <span className="text-green-400">
                {userMainDash.pop().username}
              </span>
            </h1>
            <Link to="/users">
              <Button className="bg-blue-500">Show Users</Button>
            </Link>
          </div>
        )}
        {products.length > 0 && (
          <div className="bg-[#121c31] w-1/2 flex flex-col items-center gap-8 p-6 rounded-md">
            <h1 className="text-blue-600 text-3xl">Products</h1>
            <h1>
              Number Of Products :{" "}
              <span className="text-green-400">{products.length}</span>
            </h1>
            <h1>
              Last Products Added Is :{" "}
              <span className="text-green-400">{products.pop().name}</span>
            </h1>
            <Link to="/makers">
              <Button className="bg-blue-500">Show Products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Maindash;
