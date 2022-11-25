import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllUsers from "../Pages/AllUsers/AllUsers";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/Seller/MyOrders/MyOrders";
import MyWishlist from "../Pages/Dashboard/Seller/MyWishlist/MyWishlist";
import Payment from "../Pages/Dashboard/Seller/Payment/Payment";

import ProductDetails from "../Pages/Dashboard/Seller/ProductDetails/ProductDetails";
import UsersOrderHistory from "../Pages/Dashboard/Seller/UsersOrderHistory/UsersOrderHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

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
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/mywishlist", element: <MyWishlist /> },
      { path: "/dashboard/myorders", element: <MyOrders /> },
      { path: "/dashboard/orderhistory", element: <UsersOrderHistory /> },
      { path: "/dashboard/allseller", element: <AllSeller /> },
      { path: "/dashboard/allusers", element: <AllUsers /> },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/booking/${params.id}`),
      },
    ],
  },
]);
export default router;
