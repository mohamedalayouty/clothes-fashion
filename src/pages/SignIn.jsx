import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = ({ getDataUser, user, setUser, setrender, render }) => {
  let [checkUser, setCheckUser] = useState(true);
  let [userEmail, setUserEmail] = useState("");
  let [checkUserEmail, setCheckUserEmail] = useState(true);
  let [password, setPassword] = useState("");
  let [checkPassword, setCheckPassword] = useState(true);
  let navigate = useNavigate();

  let handleForm = (e) => {
    try {
      e.preventDefault();
      if (userEmail === "" || userEmail === "" || userEmail < 4) {
        setCheckUserEmail(false);
      } else if (password === "" || password < 4) {
        setCheckPassword(false);
        setCheckUserEmail(true);
      } else {
        let find = user.find((mail) => {
          return mail.userEmail == userEmail && mail.password == password;
        });
        if (find) {
          if (find.role === "Admin") {
            localStorage.login = "Admin";
            localStorage.id = find.id;
            navigate("/");
          } else {
            localStorage.login = "member";
            localStorage.id = find.id;
            navigate("/");
          }
        } else {
          setCheckUser(false);
        }
      }
    } catch (err) {
      setUser("Not Found");
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-blue-gray-100">
        <form
          onSubmit={(e) => handleForm(e)}
          className="flex flex-col items-center gap-6 mt-8 mb-8"
        >
          <div className="flex flex-col gap-2">
            <label
              className={
                checkUserEmail == true
                  ? "font-bold text-sm"
                  : "font-bold text-sm text-red-700"
              }
            >
              Email adress
            </label>
            <input
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              className="px-1 rounded-sm w-64"
              type="email"
              placeholder="Enter email"
            />
            <h1 className=" text-xs text-gray-600 font-bold">
              We'll never share your email with anyone else.
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={
                checkPassword == true
                  ? "font-bold text-sm text-black"
                  : "font-bold text-sm text-red-700"
              }
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="px-1 rounded-sm w-64 me-2"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex me-36">
            <input type="checkbox" className="me-2" />
            <label className="font-bold text-sm">Remember Me</label>
          </div>
          <div>
            <Button
              onClick={() => setrender(!render)}
              className=" bg-blue-900 py-2 me-2 text-gray-300"
              type="submit"
            >
              Login
            </Button>
            <Link to="/create account">
              <Button className="bg-blue-900 py-2 px-3 text-gray-300">
                Craete New Account
              </Button>
            </Link>
          </div>
          {checkUser === false && (
            <div>
              <h1 className=" text-red-700 font-bold">
                Account is not found please check password or email
              </h1>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
