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

const UsersDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setcity] = useState("");
  const [gender, setgender] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [img, setimg] = useState("");
  const [checkname, setcheckname] = useState(true);

  let getDataUsers = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `http://localhost:4000/users/${productId}`,
      });
      setusername(data.data.username);
      setfirstname(data.data.firstName);
      setlastname(data.data.lastName);
      setuserEmail(data.data.userEmail);
      setPassword(data.data.password);
      setcity(data.data.city);
      setgender(data.data.gender);
      setphonenumber(data.data.phonenumber);
      setimg(data.data.img);
    } catch (eror) {
      setusername("Product Not Found");
    }
  };

  let handleform = (e) => {
    e.preventDefault();
    if (firstName == "") {
      return;
    } else {
      setcheckname(false);
      setTimeout(() => {
        navigate("/users");
      }, 2000);
      axios({
        method: "patch",
        url: `http://localhost:4000/users/${productId}`,
        data: {
          username: username,
          firstName: firstName,
          lastName: lastName,
          userEmail: userEmail,
          password: password,
          city: city,
          gender: gender,
          phonenumber: phonenumber,
          img: img,
        },
      });
    }
  };
  useEffect(() => {
    getDataUsers();
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
              <label className="me-2">UserName</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">FirstName</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={firstName}
                onChange={(e) => setfirstname(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">LastName</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={lastName}
                onChange={(e) => setlastname(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">UserEmail</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={userEmail}
                onChange={(e) => setuserEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">Password</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">City</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">gender</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="me-2">Phone Number</label>
              <input
                type="text"
                className="mb-2 p-1"
                value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}
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
          <Button onClick={() => navigate(-1)}>Back To Users</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UsersDetails;
