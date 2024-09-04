import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import NotFoundPage from "./assets/components/pages/NotFoundPage";
import Products from "./assets/components/Products";
import SingleProduct from "./assets/components/pages/SingleProduct";
import Services from "./assets/components/pages/Services";
import Contact from "./assets/components/pages/Contact";
import Home from "./assets/components/pages/Home";
import store from "./assets/redux/store";
import Cart from "./assets/components/pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/boutique",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/boutique/:id",
        element: <SingleProduct />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
