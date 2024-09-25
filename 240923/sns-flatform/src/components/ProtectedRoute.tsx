//로그인된 유저만 볼수있는 페이지를 나눠주기 위해 만든 컴포넌트
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
//useNavigate를 사용하여 const navigate = useNavigate(); 하고 유저의 값이 없을때 리턴값 return navigate("/login");을 하면 app에서 유저 데이터가 없을 시에 함수가 컴포넌트를 감싸는 형태가 되기때문에 Navigate인 컴포넌트 속성을 가진 훅을 사용한다.

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  console.log(user);
  if (!user || user === null) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
