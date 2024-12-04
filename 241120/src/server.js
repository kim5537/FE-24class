import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
//전역 라우터 = 글로벌 라우터 //
app.use(express.urlencoded({ extended: true }));
//글로벌 라우터 실행 전 session 정의를 해야함

// console.log(process.env.COOKIE_SECRET);
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    //암호화를 위해 hellow라고 적는다. 현업에선 이것 또한 hashing해서 넣는다. 이 키를 알면 데이터를 다 빼내어 갈 수 있기 때문이다.
    resave: true,
    // 이 세션을 얼만에 한번씩 업뎃할 것인지 - 특정 시간이 되면 업뎃 시키겠다는 뜻
    //(= true일 경우)세션 안에 잇는 데이터가 변경되지 않아도 클라이언트의 매 요청마다 세션을 저장하는 옵션
    saveUninitialized: true,
    //무슨 프로그램이든 init으로 시작하는데 실제 세션이 초기화 되기 전부터 저장하겠다는 의미이다.
    cookie: {
      maxAge: 20000,
      //20초를 말함
      //쿠키에 대한 유효 시간을 정한다.
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }), // 여기는 client도 볼 수있어 환경변수로 설정한다.
  })
);

/// ==> 정상적으로 값이 추가 & 값 받아오기 가능한 걸 모니터링 했기 때문에 삭제 함.
// app.use((req, res, next) => {
// console.log(req.headers); //항상 값을 주고 받기 힘들기 때문에  생성된 세션(서버 입장에서 말한다.모든 사용자의 세션값을 가져온다.)의 모든 값을 한번에 가져오는 함수
// req.sessionStore.all((error, session) => {
//   // 처음엔 찾아오지 못할 때, 두번째는 찾아왔을 때를 말하며 우리가 적은 error와 session명은 매개변수이다.
//   console.log(session);
//   next();
// });
// });

// app.get("/add-one", (req, res, next) => {
//   req.session.specialUser += 1; // 새로운 유저인 척
//   //세션의 고유 아이디이다.
//   return res.send(`${req.session.id} ${req.session.specialUser}`);
// });
app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;

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
