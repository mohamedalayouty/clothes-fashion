import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import { Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import img2 from "../photo/mohamed.jfif";
const ViewProfileUser = ({ profileUser }) => {
  let navigate = useNavigate();

  return (
    <div className=" bg-black">
      {
        <div className="flex-col h-[80vh]">
          <div className="flex">
            <div className="flex w-1/4 p-4">
              <Avatar
                variant="circular"
                alt="tania andrew"
                className="cursor-pointer w-48 h-48"
                src={img2}
              />
            </div>
            <div className="bg-white h-[80vh] w-1"></div>
            <div className="flex-col w-2/3 justify-between ms-2">
              <div className="flex justify-between">
                <div className="grid gap-20 mt-4">
                  <h1 className=" text-white font-semibold">
                    First Name :{" "}
                    <span className="text-blue-600">
                      {profileUser?.firstName}
                    </span>
                  </h1>
                  <h1 className=" text-white font-semibold">
                    UserName :{" "}
                    <span className="text-blue-600">
                      {profileUser?.username}
                    </span>
                  </h1>
                  <h1 className=" text-white font-semibold">
                    Password :{" "}
                    <span className="text-blue-600">
                      {profileUser?.password}
                    </span>
                  </h1>
                  <h1 className=" text-white font-semibold">
                    City :{" "}
                    <span className="text-blue-600">{profileUser?.city}</span>
                  </h1>
                </div>
                <div className="grid gap-12 mt-4 me-4">
                  <h1 className=" text-white font-semibold">
                    Last Name :{" "}
                    <span className="text-blue-600">
                      {profileUser?.lastName}
                    </span>
                  </h1>
                  <h1 className=" text-white font-semibold">
                    Email :{" "}
                    <span className="text-blue-600">
                      {profileUser?.userEmail}
                    </span>
                  </h1>
                  <h1 className=" text-white font-semibold">
                    Gender :{" "}
                    <span className="text-blue-600">{profileUser?.gender}</span>
                  </h1>
                  <h1 className=" text-white font-semibold">
                    Phone Number :{" "}
                    <span className="text-blue-600">
                      {profileUser?.phonenumber}
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center mb-4 mt-8">
                <Button
                  onClick={() => navigate(`/edituser/${profileUser.id}`)}
                  className="bg-green-600 font-semibold"
                >
                  Edite
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default ViewProfileUser;
