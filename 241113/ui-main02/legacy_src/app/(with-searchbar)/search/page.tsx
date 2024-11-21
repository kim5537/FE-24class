import React from "react";
import ClientComponent from "../../../components/client-component";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  //쿼리값 주기 >  매개변수로 props줌 > search?q = 검색어 ==> 라고 검색한 후 콘솔에 찍으면 params 와 searchParams 두개 있다.- 형태는 promise이다.
  const { q } = await searchParams;
  // console.log(q);
  // app router 를 활용하여 페이지 컴포넌트를 만들면 , 기본적으로 서버 컴포넌트의 속성을 가진다.
  return (
    <div>
      Search Page: {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Page;
