import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-[#121c31] h-[160vh] w-1/6 flex flex-col items-center justify-evenly">
      <h1 className="font-bold text-white text-3xl">DashBoard</h1>
      <Link to="/users">
        <h1 className="font-bold text-white text-3xl">Users</h1>
      </Link>
      <Link to="/makers">
        <h1 className="font-bold text-white text-3xl">Products</h1>
      </Link>
    </div>
  );
};

export default Sidebar;
