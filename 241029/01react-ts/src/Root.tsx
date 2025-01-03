import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";

// @import url('https://fonts.googleapis.com/css2?family=Poor+Story&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

// font-family: "Source Sans 3", sans-serif;

const Globalstyle = createGlobalStyle`
  *{
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
  body {
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
`;

const App = () => {
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((current) => !current);
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Globalstyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
};

export default App;
