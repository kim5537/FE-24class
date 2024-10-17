import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";

const Globalstyles = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #000;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Globalstyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
