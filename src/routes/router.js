import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllUsers from "../Pages/AllUsers/AllUsers";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/Shared/ProductDetails/ProductDetails";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/mywishlist", element: <MyWishlist /> },
      { path: "/dashboard/myorders", element: <MyOrders /> },
      { path: "/dashboard/allseller", element: <AllSeller /> },
      { path: "/dashboard/allusers", element: <AllUsers /> },
    ],
  },
]);
export default router;
