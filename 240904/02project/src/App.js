import "./App.css";
import { useState, useEffect, useRef } from "react";
//react라는 라이브러리에 usestate를 가져온다.
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  //setConunt는 함수이다. - 콜백함수로 실행

  const [text, setText] = useState("");
  const didMountRef = useRef(false);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  // useEffect(() => {
  //   console.log("업데이트:", count, text);
  // }, [count, text]);
  ////2개의 인자값 = 1. 콜백함수 ,2.의존성 배열
  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      console.log("컴포넌트 업뎃!");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("클린업!");
  //     clearInterval(intervalID);
  //   };
  //   //리턴문을 쓸떄 -컴포넌트로 렌더링 시키고 이게 끝났다는 걸 정의할 때만 리턴문을 사용
  // });

  const handleChageText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChageText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
//count=,handleSetCount=의(= 의 앞에있는 값) 앞은 키 값으로 우리가 방금설정한 것
export default App;
