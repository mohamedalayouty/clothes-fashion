import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";

const AddNewUser = () => {
  let [firstName, setfirstname] = useState("");
  let [lastName, setlastname] = useState("");
  let [username, setusername] = useState("");
  let [img, setimg] = useState("");
  let [userEmail, setuseremail] = useState("");
  let [password, setpassword] = useState("");
  let [check, setcheck] = useState(false);
  let [city, setcity] = useState("");
  let [gender, setgender] = useState("");
  let [phonenumber, setphonenumber] = useState("");

  let navigate = useNavigate();

  let handleform = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      userEmail === "" ||
      password === "" ||
      city === "" ||
      gender === "" ||
      phonenumber === "" ||
      img === ""
    ) {
      return;
    } else {
      axios({
        method: "post",
        url: "http://localhost:4000/users",
        data: {
          firstName,
          img,
          lastName,
          username,
          userEmail,
          password,
          city,
          gender,
          phonenumber,
        },
      });
      setcheck(true);
      setTimeout(() => {
        navigate("/user");
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="mt-8 w-80 text-center bg-blue-gray-100 p-6 mb-4">
        <form onSubmit={(e) => handleform(e)}>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              firstName
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={firstName}
              onChange={(e) => setfirstname(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              lastName
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={lastName}
              onChange={(e) => setlastname(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              username
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              userEmail
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={userEmail}
              onChange={(e) => setuseremail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              password
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              city
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              gender
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="me-2 font-bold text-lg mb-1 text-black">
              phonenumber
            </label>
            <input
              type="text"
              className="mb-2 p-1 rounded-md"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
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

export default AddNewUser;
