import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import AllSeller from "../Pages/Dashboard/Admin/AllSeller/AllSeller";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import ReportedItem from "../Pages/Dashboard/Admin/ReportedItem/ReportedItem";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProducts from "../Pages/Dashboard/Seller/AddProducts/AddProducts";
import MyBuers from "../Pages/Dashboard/Seller/MyBuyers/MyBuers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import MyOrders from "../Pages/Dashboard/User/MyOrders/MyOrders";
import MyWishlist from "../Pages/Dashboard/User/MyWishlist/MyWishlist";
import Payment from "../Pages/Dashboard/User/Payment/Payment";

import ProductDetails from "../Pages/Dashboard/User/ProductDetails/ProductDetails";
import UsersOrderHistory from "../Pages/Dashboard/User/UsersOrderHistory/UsersOrderHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/products/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/mywishlist", element: <MyWishlist /> },
      { path: "/dashboard/myorders", element: <MyOrders /> },
      { path: "/dashboard/orderhistory", element: <UsersOrderHistory /> },
      { path: "/dashboard/allseller", element: <AllSeller /> },
      { path: "/dashboard/allusers", element: <AllUsers /> },
      { path: "/dashboard/reporteditem", element: <ReportedItem /> },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/buy-product/${params.id}`, {
            headers: {
              authorisation: `bearer ${localStorage.getItem(
                "merchantry-token"
              )}`,
            },
          }),
      },
      { path: "/dashboard/addproduct", element: <AddProducts /> },
      { path: "/dashboard/myproducts", element: <MyProducts /> },
      { path: "/dashboard/mybuyer", element: <MyBuers /> },
    ],
  },
]);
export default router;
