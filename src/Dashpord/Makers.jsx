import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import Sidebar from "../Component/Sidebar";

const Makers = ({
  products,
  getDataProducts,
  checkdelete,
  deleteProduct,
  navigate,
}) => {
  useEffect(() => {
    getDataProducts();
  }, [checkdelete]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col m-4 w-10/12">
        <div className="flex flex-col items-center">
          <h1 className="my-4 text-[#3d4b5e] font-bold text-3xl">Makers</h1>
          <Button
            onClick={() => navigate("/add new product")}
            className="bg-green-400"
          >
            Add New Product
          </Button>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-indigo-200 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr className="border-b dark:border-neutral-200">
                    <th scope="col" className=" px-6 py-4">
                      Product
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Operations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="bg-indigo-100">
                      <td>
                        <Avatar
                          src={product.img}
                          className="border-r"
                          size="md"
                        ></Avatar>
                      </td>
                      <td className="border-r text-[#3d4b5e] font-bold">
                        {product.price}
                      </td>
                      <td className="flex justify-evenly items-center border-r">
                        <Button
                          onClick={() => navigate(`/view/${product.id}`)}
                          className="bg-blue-600"
                          size="sm"
                        >
                          View
                        </Button>
                        <Button
                          onClick={() =>
                            navigate(`/product details/${product.id}`)
                          }
                          className="bg-yellow-700"
                          size="sm"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => deleteProduct(product)}
                          className="bg-red-700"
                          size="sm"
                        >
                          Del
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makers;

// important
// "Products" : [
// {
//     "id": 1,
//     "status": "SALE",
//     "img": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "120$",
//     "num": 1
//   },
//   {
//     "id": 2,
//     "status1": "NEW",
//     "img": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "260$",
//     "num": 1
//   },
//   {
//     "id": 3,
//     "status": "SALE",
//     "img": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "140$",
//     "num": 1
//   },
//   {
//     "id": 4,
//     "status1": "NEW",
//     "img": "https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets-500x500.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "230$",
//     "num": 1
//   },
//   {
//     "id": 5,
//     "status": "SALE",
//     "img": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "320$",
//     "num": 1
//   },
//   {
//     "id": 6,
//     "status": "SALE",
//     "img": "https://media.gettyimages.com/id/172417586/photo/elegant-black-leather-shoes.jpg?s=612x612&w=gi&k=20&c=_HiU2PSG-krAT5-QIlDskHEhmXOTYQzSushSW51F25c=",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "200$",
//     "num": 1
//   },
//   {
//     "id": 7,
//     "status1": "NEW",
//     "img": "https://media.istockphoto.com/id/1237985231/photo/shorts.jpg?s=1024x1024&w=is&k=20&c=wPbixHW2bXOS0-Mmpd5F5mns9Jy-WQ0nv_dIIZr1-L0=",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "150$",
//     "num": 1
//   },
//   {
// "id": 8,
// "status1": "NEW",
// "img": "https://sutrastores.com/cdn/shop/files/315A0681.jpg?v=1698352232&width=700",
// "description": "Activ means",
// "name": "CREW-NECK SHIRT",
// "price": "600$",
// "num": 1
//   },
//   {
//     "id": 9,
//     "status": "SALE",
//     "img": "https://ajeeb.net/cdn/shop/products/Ajeeb__SHEIN1_a7e609ae-c571-4f0c-89f4-6729ef791656_1024x1024@2x.jpg?v=1657182730",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "199$",
//     "num": 1
//   },
//   {
//     "id": 10,
//     "status1": "NEW",
//     "img": "https://m.media-amazon.com/images/I/51KR2V1XpNL._AC_SX466_.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "430$",
//     "num": 1
//   },
//   {
//     "id": 11,
//     "status": "SALE",
//     "img": "https://foxcasual.com/wp-content/uploads/2022/01/sa-158%D9%83%D9%88%D8%AA%D8%B4%D9%8A%D8%A7%D8%AA-%D8%B1%D8%AC%D8%A7%D9%84%D9%8A-%D8%A7%D8%AD%D8%B0%D9%8A%D8%A9-%D8%B1%D8%AC%D8%A7%D9%84%D9%89-%D8%B4%D9%88%D8%B2.jpg.webp",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "180$",
//     "num": 1
//   },
//   {
//     "id": 12,
//     "status1": "NEW",
//     "img": "https://m.media-amazon.com/images/I/61HujLZA+SL._AC_SX569_.jpg",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "250$",
//     "num": 1
//   },
//   {
//     "id": 13,
//     "status1": "NEW",
//     "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/512522/1.jpg?7504",
//     "description": "Activ means",
//     "name": "CREW-NECK SHIRT",
//     "price": "150$",
//     "num": 1
//   }
// ],
