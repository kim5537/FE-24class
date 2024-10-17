import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
//공급자가 제공하는 값을 app이 받아올 수 있도록 값을 뿌려준다.
//공급자의 값은 어디있나? 바로 store이다. >>store.js
import App from "./App.jsx";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
