// theme.js
import ambackground from "../img/ambg.png";
import pmbackground from "../img/pmbg.jpg";

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
    opacityWhite: "#ffffff80",
    font,
    boxline,
  },
  pm: {
    background: `center/cover  no-repeat  url(${pmbackground})`,
    basecolor: "#81A6B6",
    maincolor: "#4F6B82",
    linecolor: "#435558",
    opacityWhite: "#ffffff80",
    font,
    boxline,
  },
};

export default theme;
