import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import Cart from "./pages/Cart";
import Maindash from "./Dashpord/Maindash";
import ViewProfileUser from "./pages/ViewProfileUser";
import Makers from "./Dashpord/Makers";
import axios from "axios";
import Swal from "sweetalert2";
import ProductDetails from "./Dashpord/ProductDetails";
import NotFound from "./pages/NotFound";
import ViewProduct from "./Dashpord/ViewProduct";
import Sidebar from "./Component/Sidebar";
import AddNewPoduct from "./Dashpord/AddNewPoduct";
import UsersAdmin from "./Dashpord/UsersAdmin";
import ViewUsers from "./Dashpord/ViewUsers";
import UsersDetails from "./Dashpord/UsersDetails";
import EditProfileUser from "./pages/EditProfileUser";
import AddNewUser from "./Dashpord/AddNewUser";

const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  const [checkdelete, setCheckDelete] = useState(false);
  const navigate = useNavigate();
  const [productCart, setProductCart] = useState([]);
  const [profileUser, setProfileUser] = useState(null);
  const [render, setrender] = useState(false);

  let signOut = () => {
    localStorage.clear();
  };

  let deleteProduct = async (product) => {
    try {
      let check = await Swal.fire({
        title: `you will delete ${product.name}`,
        text: "That thing is still around?",
        icon: "error",
        showCancelButton: true,
      });
      if (check.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:4000/products/${product.id}`,
        });
        setCheckDelete(!checkdelete);
        Swal.fire({
          position: "center-end",
          icon: "success",
          title: "Your Product Is Deleted Succefuly",
          showConfirmButton: false,
          timer: 1700,
        });
      }
    } catch (err) {
      setProducts([]);
    }
  };

  let getDataUser = async () => {
    try {
      const data = await axios({
        method: "get",
        url: "http://localhost:4000/users",
      });
      setUser(data.data);
    } catch (err) {
      setUser("Not Found");
    }
  };

  let getDataProducts = async () => {
    let data = await axios({
      method: "get",
      url: "http://localhost:4000/products",
    });
    setProducts(data.data);
  };

  let changeAdmin = async (product) => {
    axios({
      method: "patch",
      url: `http://localhost:4000/users/${product.id}`,
      data: {
        role: product.role == "Admin" ? "member" : "Admin",
      },
    });
    setCheckDelete(!checkdelete);
  };

  let addProduct = (obj) => {
    let checkProduct = productCart.some((product) => {
      return obj.id === product.id;
    });
    if (checkProduct) {
      let productplus = productCart.map((product) => {
        if (product.id == obj.id) {
          product.num++;
        }
        return product;
      });
      setProductCart(productplus);
    } else {
      setProductCart([...productCart, obj]);
    }
  };

  let getDataProfile = async () => {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:4000/users/${localStorage.id}`,
      });
      setProfileUser(data.data);
    } catch (err) {
      setProfileUser("Not Found");
    }
  };

  useEffect(() => {
    getDataProfile();
  }, [render]);

  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <>
      <h1 className="bg-black text-red-600 font-bold text-center">
        Free shipping, 30-day return or refund guarantee.
      </h1>
      <Navbar
        productCart={productCart}
        profileUser={profileUser}
        signOut={signOut}
        setrender={setrender}
        render={render}
        setProfileUser={setProfileUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              addProduct={addProduct}
              getDataProducts={getDataProducts}
              products={products}
            />
          }
        />
        <Route
          path="/sign in"
          element={
            <SignIn
              getDataUser={getDataUser}
              user={user}
              setUser={setUser}
              setrender={setrender}
              render={render}
            />
          }
        />
        <Route
          path="/create account"
          element={<CreateAccount getDataUser={getDataUser} user={user} />}
        />
        <Route
          path="/cart"
          element={
            <Cart productCart={productCart} setProductCart={setProductCart} />
          }
        />
        <Route
          path="/main dash"
          element={
            localStorage.login === "Admin" && <Maindash products={products} />
          }
        />
        <Route
          path="/view profile user"
          element={<ViewProfileUser profileUser={profileUser} />}
        />
        <Route
          path="/makers"
          element={
            localStorage.login === "Admin" && (
              <Makers
                navigate={navigate}
                products={products}
                getDataProducts={getDataProducts}
                deleteProduct={deleteProduct}
                checkdelete={checkdelete}
              />
            )
          }
        />
        <Route
          path="/product details/:productId"
          element={localStorage.login === "Admin" && <ProductDetails />}
        ></Route>
        <Route path="/view/:productId" element={<ViewProduct />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route
          path="/add new product"
          element={localStorage.login === "Admin" && <AddNewPoduct />}
        />

        <Route
          path="/users"
          element={
            localStorage.login === "Admin" && (
              <UsersAdmin
                getDataUser={getDataUser}
                user={user}
                navigate={navigate}
                changeAdmin={changeAdmin}
                checkdelete={checkdelete}
                setCheckDelete={setCheckDelete}
              />
            )
          }
        />
        <Route
          path="/users details/:productId"
          element={
            localStorage.login === "Admin" && (
              <UsersDetails navigate={navigate} />
            )
          }
        />
        <Route
          path="/usersview/:productId"
          element={<ViewUsers navigate={navigate} />}
        />
        <Route
          path="/edituser/:productId"
          element={<EditProfileUser navigate={navigate} />}
        />
        <Route
          path="/add new user"
          element={<AddNewUser navigate={navigate} />}
        />
      </Routes>
    </>
  );
};

export default App;

// library gSap
