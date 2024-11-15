import { useState, useEffect } from "react";

/// ===== 우리가 해 왔던 방법 =======
// react에서 data를 fetching하는 과정 - data-fetching
const Page = () => {
  const [data, setData] = useState();
  const fetchingData = async () => {
    const response = await fetch("...");
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return <div>{data}</div>;
};
export default Page;
// 단점 = 서버에게 데이터 받기 / 유저가 작업하고 준다. = 2가지를 요청시에 반복
// 이때 사전 렌더링으로 혁신적으로 줄어 들었다.
//  useEffect는 마운트 된 후에 일어난다. 그러나 사전 렌더링을 하기 때문에 사전 렌더링 시간동안 먼저 패칭을 하고 있다.
