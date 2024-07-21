import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import axios from "axios";

const ViewUsers = ({ navigate }) => {
  let [user, setUser] = useState(null);
  let { productId } = useParams();

  let getDataUsers = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `http://localhost:4000/users/${productId}`,
      });
      setUser(data.data);
    } catch (eror) {
      setUser("user Not Found");
    }
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  console.log(user);
  if (isNaN(productId)) {
    return <NotFound />;
  }

  return (
    <div className="flex items-center justify-center">
      {user && typeof user !== "string" ? (
        <Card className="mt-12 w-96 text-center">
          <div>
            <Avatar src={user.img} className="" size="xl" />
          </div>
          <CardBody className="">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UserName : {user.username}
            </Typography>
            <Typography variant="h6">First Name : {user.firstName}</Typography>
            <Typography variant="h6">lastName : {user.lastName}</Typography>
            <Typography variant="h6">UserEmail : {user.userEmail}</Typography>
            <Typography variant="h6">City : {user.city}</Typography>
            <Typography variant="h6">gender : {user.gender}</Typography>
            <Typography variant="h6">
              Phone number : {user.phonenumber}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => navigate(-1)}>Back To Users</Button>
          </CardFooter>
        </Card>
      ) : (
        <h1>{user}</h1>
      )}
    </div>
  );
};

export default ViewUsers;
