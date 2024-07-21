import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = ({ getDataUser, user }) => {
  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [username, setusername] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [checkUserEmail, setCheckUserEmail] = useState(true);
  let [password, setPassword] = useState("");
  let [checkpassword, setCheckPassword] = useState(true);
  let [img, setImage] = useState("");
  let [city, setcity] = useState("");
  let [gender, setgender] = useState("");
  let [phonenumber, setphonenumber] = useState("");
  let navigate = useNavigate();

  let handleform = (e) => {
    e.preventDefault();

    if (
      userEmail == "" ||
      userEmail < 4 ||
      firstName == "" ||
      lastName == "" ||
      username == ""
    ) {
      setCheckUserEmail(false);
    } else if (password == "" || password < 4) {
      setCheckPassword(false);
      setCheckUserEmail(true);
    } else {
      let find = user.find((mail) => {
        return mail.userEmail == userEmail && mail.password == password;
      });
      if (find) {
        navigate("/sign in");
      } else {
        axios({
          method: "post",
          url: "http://localhost:4000/users",
          data: {
            role: "member",
            firstName,
            lastName,
            username,
            userEmail,
            password,
            img,
            city,
            gender,
            phonenumber,
          },
        });
        navigate("/sign in");
      }
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      {typeof user !== "string" ? (
        <div className="flex flex-col bg-blue-gray-100">
          <form
            onSubmit={(e) => handleform(e)}
            className="flex flex-col items-center gap-6 mt-8 mb-8"
          >
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">First Name</label>
                <input
                  onChange={(e) => setfirstName(e.target.value)}
                  className="px-1 rounded-sm w-[11.5em]"
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Last Name</label>
                <input
                  onChange={(e) => setlastName(e.target.value)}
                  className="px-1 rounded-sm w-[11.5em]"
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">User Name</label>
              <input
                onChange={(e) => setusername(e.target.value)}
                className="px-1 rounded-sm w-96"
                type="text"
                placeholder="Enter user name"
                value={username}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Email</label>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                className="px-1 rounded-sm w-96"
                type="email"
                placeholder="Enter email"
                value={userEmail}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="px-1 rounded-sm w-96"
                type="password"
                placeholder="password"
                value={password}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                className="px-1 rounded-sm w-96"
                type="url"
                placeholder="image"
                value={img}
              />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">City</label>
                <input
                  onChange={(e) => setcity(e.target.value)}
                  className="px-1 rounded-sm w-[7.3em]"
                  type="text"
                  placeholder="Enter first name"
                  value={city}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Gender</label>
                <input
                  onChange={(e) => setgender(e.target.value)}
                  className="px-1 rounded-sm w-[7.3em]"
                  type="text"
                  placeholder="Enter last name"
                  value={gender}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Phone Number</label>
                <input
                  onChange={(e) => setphonenumber(e.target.value)}
                  className="px-1 rounded-sm w-[7.3em]"
                  type="text"
                  placeholder="Enter last name"
                  value={phonenumber}
                />
              </div>
            </div>

            <div className="flex">
              <input type="checkbox" className="me-2" />
              <label className="font-bold text-sm text-blue-900">
                Apply Rules And condition
              </label>
            </div>

            <div>
              <Button className=" bg-blue-900 py-2 text-gray-300" type="submit">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <h1>{user}</h1>
      )}

      <Footer />
    </>
  );
};

export default CreateAccount;
