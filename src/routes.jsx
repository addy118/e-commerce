import { Children } from "react";
import App from "./App";
import Cart from "./Cart";
import ErrorPage from "./components/ErrorElement";
import Shop from "./Shop";
import DisplayProducts from "./components/DisplayProducts";
import ProductsError from "./components/ProductsError";

const baseUrl = "https://fakestoreapi.in/api/products";
const allProducts = `${baseUrl}?limit=150`;
// const categoryWise = `${baseUrl}/category?type=${CATEGORY}`;
// const pageWise = `${baseUrl}?page=${PAGE}`;

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Shop />,
    children: [
      {
        index: true,
        element: <ProductsError />,
      },
      {
        path: "all",
        element: <DisplayProducts url={allProducts} />,
      },
      {
        path: "tv",
        element: <DisplayProducts url={`${baseUrl}/category?type=tv`} />,
      },
      {
        path: "audio",
        element: <DisplayProducts url={`${baseUrl}/category?type=audio`} />,
      },
      {
        path: "laptop",
        element: <DisplayProducts url={`${baseUrl}/category?type=laptop`} />,
      },
      {
        path: "gaming",
        element: <DisplayProducts url={`${baseUrl}/category?type=gaming`} />,
      },
      {
        path: "mobile",
        element: <DisplayProducts url={`${baseUrl}/category?type=mobile`} />,
      },
      {
        path: "appliances",
        element: (
          <DisplayProducts url={`${baseUrl}/category?type=appliances`} />
        ),
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
