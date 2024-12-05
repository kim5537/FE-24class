import express from "express";
import {
  watch,
  getEdit,
  getUpload,
  postUpload,
  postEdit,
  deleteVideo,
} from "../controllers/videoController";
import { protectorMiddleware } from "../middlewares";

const videoRouter = express.Router();

// 무조건 순서를 지켜야한다. id뒤에는 아이디 관렴란 적어야한다.
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(postUpload);
videoRouter.get("/:id([0-9a-z]{24})", watch);
//(\\d+) = 숫자만 허용
videoRouter
  .route("/:id([0-9a-z]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter
  .route("/:id([0-9a-z]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);

export default videoRouter;
