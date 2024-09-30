// theme.js
import ambackground from "../img/ambg.png";
import pmbackground from "../img/pmbg.png";

const font = {
  lg: "30px",
  md: "16px",
  sm: "12px",
};

const boxline = `border: 1px solid #ccc; border-radius: 15px; box-shadow: 0 0 6px #AB868650;`;

const theme = {
  am: {
    background: `center/cover no-repeat url(${ambackground})  `,
    basecolor: "#F2ECD5",
    maincolor: "#9F8B7D",
    linecolor: "#584343",
    font,
    boxline,
  },
  pm: {
    background: `center/cover  no-repeat  url(${pmbackground})`,
    basecolor: "#8CB3C3",
    maincolor: "#4F6B82",
    linecolor: "#435558",
    font,
    boxline,
  },
};

export default theme;
