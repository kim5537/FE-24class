import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import style from "./layout.module.css";

import React from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>💌 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @R.H</footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
