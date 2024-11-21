import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);

// 무조건 순서를 지켜야한다. id뒤에는 아이디 관렴란 적어야한다. 사이에 상단에 dlTsms upload가 들어가 면 upload 자체도 id로 인식해버린다.
videoRouter.get("/:id(\\d+)", see);
//(\\d+) = 숫자만 허용
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
