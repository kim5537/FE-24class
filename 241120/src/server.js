import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

console.log(process.cwd());

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
//전역 라우터 = 글로벌 라우터 //
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT}`);
app.listen(4000, handleListening);

//dev : 개발자모드를 말한다.
//combined : 뭔가 많다.

// const middleWare = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// const privateMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1> Not Allowed </h1>");
//   }
//   console.log("Allowed, You may continue");
//   next();
// };

// app.get("/", handleHome);

// const handleHome = (req, res) => {
//   return res.end();
// };
