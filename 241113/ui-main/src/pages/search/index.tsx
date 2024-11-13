import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  // console.log(router);
  //next는 data를 가져올 때 받아오기 전 후 둘 다 보여준다. 그래서 데이터를 두번씩 찍어준다.
  const {
    query: { q },
  } = router;
  return <h1>Search : {q}</h1>;
};

export default Search;
//next.js는 프레임워크이나 react를 기틀로 만들어 져서 똑같이 훅이라고 부르고 있다.
