import React, { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div> */}
      {/* <Suspense fallback={<div>Loading....</div>}> */}
      {/* //Suspense가 있기 때문에 Search페이지가 정적 컴포넌트의 내부에 있음에도 동적컴포넌트로 계속 있을 수 있다. */}
      <Searchbar />
      {/* </Suspense> */}
      {children}
    </div>
  );
};

export default Layout;
