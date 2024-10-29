import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Coin from "./routers/Coin";
import Coins from "./routers/Coins";
import Chart from "./routers/Chart";
import Price from "./routers/Price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
