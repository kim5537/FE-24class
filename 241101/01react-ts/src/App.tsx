import React from "react";
import { createGlobalStyle } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";
//useRecoilState = 값을 관리

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  const hours = useRecoilValue(hourSelector);
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value); // 형변환 필수~ input값은 string으로 되기 때문 atom에는 number의 속성을 가지고 있기 때문이다. // Number()은 + 랑 같다. 타입스크립트의 문법이다.
  };
  return (
    <>
      <GlobalStyle />
      <div>
        <input
          onChange={onMinutesChange}
          type="number"
          placeholder="Minutes"
          value={minutes}
        />
        <input type="number" placeholder="Hours" value={hours} />
      </div>
    </>
  );
};

export default App;
