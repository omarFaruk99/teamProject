import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Component/Roots/Root";
import Home from "./assets/Component/Home/Home";
import Statistics from "./assets/Component/Statistics/Statistics";
import Dashboard from "./assets/Component/Dashboard/Dashboard";
import ProductDetails from "./assets/Component/ProductsDetails/ProductDetails";
import { CartProvider } from "./assets/Component/CartContext/CartContext";
import { WishlistProvider } from "./assets/Component/WishlistContext/WishlistContext";
import ErrorPage from "./assets/Component/ErrorPage/ErrorPage";
import Blogs from "./assets/Component/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const categories = await fetch("/ProductCategory.json").then((res) =>
            res.json()
          );
          const products = await fetch("/Products.json").then((res) =>
            res.json()
          );
          return { categories, products };
        },
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/Products.json").then((res) => res.json()), // Loads product data for the details page
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        {" "}
        {/* Wrap RouterProvider with CartProvider */}
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
