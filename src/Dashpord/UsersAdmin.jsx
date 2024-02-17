import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import Sidebar from "../Component/Sidebar";

const UsersAdmin = ({
  user,
  navigate,
  deleteUsers,
  changeAdmin,
  getDataUser,
}) => {
  useEffect(() => {
    getDataUser();
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col m-4 w-10/12">
        <div className="flex flex-col items-center">
          <h1 className="my-4 text-[#3d4b5e] font-bold text-3xl">Users</h1>
          <Button
            onClick={() => navigate("/add new user")}
            className="bg-green-400"
          >
            Add New User
          </Button>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-indigo-200 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr className="border-b dark:border-neutral-200">
                    <th scope="col" className=" px-6 py-4">
                      UserName
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Role
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Operations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user && typeof user !== "string" ? (
                    user.map((product, index) => (
                      <tr key={index} className="bg-indigo-100">
                        <td className="border-r text-[#3d4b5e] font-bold">
                          {product.username}
                        </td>
                        <td className="border-r text-[#3d4b5e] font-bold">
                          {product.role}
                        </td>
                        <td className="flex justify-evenly items-center border-r my-1">
                          <Button
                            onClick={() => navigate(`/usersview/${product.id}`)}
                            className="bg-blue-600"
                            size="sm"
                          >
                            View
                          </Button>
                          <Button
                            onClick={() =>
                              navigate(`/users details/${product.id}`)
                            }
                            className="bg-yellow-700"
                            size="sm"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => deleteUsers(product)}
                            className="bg-red-700"
                            size="sm"
                          >
                            Del
                          </Button>
                          <Button
                            onClick={() => changeAdmin(product)}
                            className="bg-green-600 w-1/4"
                            size="sm"
                          >
                            {" "}
                            {product.role === "member"
                              ? `Make Admin`
                              : `Remove ${product.role}`}
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div>{user}</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersAdmin;
