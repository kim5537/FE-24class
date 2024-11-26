import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/nodejs");

const db = mongoose.connection; //url과 연결 되어잇는 실체를 db로 지정

const handleOpen = () => console.log("Connected to MongoDB❣");
const handleError = (error) => console.log("❌ DB Error", error);

//에러 발생시
db.on("error", handleError);
//서버에 접속시 -분리해서 쓸 수도 있다.
db.once("open", handleOpen);
