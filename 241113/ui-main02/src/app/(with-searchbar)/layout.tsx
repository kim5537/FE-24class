import React, { ReactNode } from "react";
import Searchbar from "./searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Searchbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
