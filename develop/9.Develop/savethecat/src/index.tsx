import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./Page";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <Page />
  </RecoilRoot>
);
