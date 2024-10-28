import React from "react";
// import Header from "./components/Header";
// import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      {/* Hello Wolrd */}
      <Outlet />
      {/* //아울렛이 없으면 Router에서 정의한 children을 가져오지 못한다. */}
    </div>
  );
};

export default Root;

// 링크를 사용하는 방법 (Header에 바로 링크 걸기)
//import { Link } from "react-router-dom";
// return (
//   <div>
//     <ul>
//       <li>
//         <Link to={"/"}> Home</Link>
//       </li>
//       <li>
//         <Link to={"/about"}>About</Link>
//       </li>
//     </ul>
//   </div>
// );

//BrowserRouter를 사용하는 법.(Router)
//Routers//Route
//Router에서 지정해서 컴포넌트를 가져왓 사용한다.
// return <Router />; >>앱에 import 함

//CreateBrowserRouter // 요즘 인기 많은 방식 (Router)
//> 메인이 되는 컴포넌트 페이지를 기준으로 자식 요소의 컴포넌트 페이지들을 라우팅해나가는 방식
