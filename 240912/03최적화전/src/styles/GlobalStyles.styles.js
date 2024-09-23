import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul ,li {
  list-style: none;
}

:root {
  --primary-color: #7a22d6;
  --font-size : 30px;
}

`;
export default Globalstyle;
