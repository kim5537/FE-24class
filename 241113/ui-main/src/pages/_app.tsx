import "@/styles/globals.css";
import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";
// import SearchableLayout from "@/components/searchable-layout"; ///index.tsx로 이사함

type NextPagewithLaout = NextPage & {
  //NextPage 꼭 먼저 있고 후에 값을 지정해줘야한다.
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPagewithLaout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

// Component :  가장 최종 루트 파일이라는 곳에 자식 요소의 페이지를 말한다.
//pageProps : 자식요소에게 보낼 props 값을 가지고 움직 일 수 있다

//getLaout의 역할 - 우리가 index.tsx에서 Home.getLayout로 지정한 component를 가져온다.
