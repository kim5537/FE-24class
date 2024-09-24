import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import reset from "styled-reset";
import { auth } from "./firebase";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import LoadingScreen from "./components/LoadingScreen";
import CreateAccount from "./routes/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
${reset}
  *{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #000;
    color: #fff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  ul,li {
    list-style: none;
  } 
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    //firebase로 전송하고 이 값을 확인 후 존재하면 setIsLoading을 false할것임 비동기처리해야함(await사용)
    //await는 async가 있어야 사용가능
    await auth.authStateReady();
    await setIsLoading(false);
    //마운트시점에만 필요하기 때문에 유즈임펙트
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
