import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./client.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
//반드시 client라는 이름으로 값을 보낸다.
