import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Root from "./Root";
import NotFound from "./components/NotFound"; // 클라이언트가 잘못된 값을 요구할 때 에러
import ErrorComponent from "./components/ErrorComponent"; // 서버에서 값이 안 올때 에러

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;

//BrowserRouter를 사용하는 법.(Router)
// return (
//   <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path="" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </BrowserRouter>
// );
