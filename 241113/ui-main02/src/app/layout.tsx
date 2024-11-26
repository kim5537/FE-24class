import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

import React from "react";

const Footer = async () => {
  //캐식값을 저장하지 않기 때문에 다이나믹(동적)페이지가 된다.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );

  if (!response) {
    return <footer>제작 @RyeoA</footer>;
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div> 제작 @RyeoA</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>💌 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
