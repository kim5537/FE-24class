import "dotenv/config";
import "./db";
import "./models/video";
import "./models/user";
import app from "./server";

//init 역할
//유저가 포트넘버로 진입한다.
//handleListening 실행한다. -> 콘솔에 링크번호 띄움

//import 함수들의 역할
//db => db를 찾아옴 -> db를 가져와서 몽구스를 끌고오는 역할을 함. (실행시키는 내용도 없는데 왜 실행되는걸가)
// import 의 정석적인 문법은 찾아 온 후 실행의 역할을 하기 때문이다. => 인터렉티브한 상황(유저의 어떠한 액션을 기다림)이 대부분이라 import를 찾아오기 정도로 생각하게 되었음

//video
// 값을 받으면 모델의 형싟으로 편집해서 보내야하기 때문에 model를 가져옴

//app
//서버다.

console.log(process.cwd());

const PORT = 4000;

const handleListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT}`);

app.listen(4000, handleListening);
