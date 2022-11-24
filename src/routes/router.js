import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
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
    element: <Dashboard />,
    children: [
      { path: "/dashboard", element: <DashHome /> },
      { path: "/dashboard/myorders", element: <MyOrders /> },
    ],
  },
]);
export default router;
