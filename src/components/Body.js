import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Layout from "./Layout";
import Services from "./Services";
import Careers from "./Careers";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use Layout component
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
