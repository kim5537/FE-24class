import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App1 from "./App1";
import { darkTheme, ligntTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App1 />
  </ThemeProvider>
);

//스타일컴포넌트와 같은 외부 라이브러리는 typescript가 뭔지 모른다. 따라서 사용할 때 타입오류가 뜬다.
// 때문에 타입을 정의해야한다. > definition
