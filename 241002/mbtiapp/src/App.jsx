import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components"; // 우리가 지정할 전체 스타일
import reset from "styled-reset"; // 크로스브라우징 목적
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Result from "./Pages/Result";

const router = createBrowserRouter([
  //데이터를 받아 뿌려줄 기지국 같은 느낌
  // 나무 구조를 위해 배열형태를 사용
  {
    path: "/",
    element: <Layout />,
    children: [
      //Layout  컴포넌트가 outlet를 import하고 있기 때문에 children 가능
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family:"CookieRun";
  src: url("/fonts/CookieRun Regular.ttf") format("truetype");
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family:"CookieRun";
    background: url("/img/cat-7635983_1920.png") center/cover;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* RouterProvide를 넣으면 위에 설정한 것이 출력 시작 , 왜냐하면 위에 router 변수명으로 우리가 createBrowserRouter로 설정한 값을 넣었기 때문이다. */}
    </div>
  );
};

export default App;
