import mongoose from "mongoose";

export const formHashTags = (hashtags) => {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
};

//스키마를만들기 위함 모델 세팅
const videoSchema = new mongoose.Schema({
  title: { type: String, uppercase: true, maxLength: 80, required: true },
  description: { type: String, trim: true, minLength: 20, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

//모델이 생성되기 전에 움직이는 ㄴ미들웨어 함수 - 몽구스
// videoSchema.pre("save", async function () {
//   console.log("we are about to:", this);
//   this.title = "Hahaha! 이건 빼았겼다.";
// });
// videoSchema.pre("save", async function () {
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((word) => (word.startsWith("#") ? word : `#${word}`));
// });

const Video = mongoose.model("Video", videoSchema);
export default Video;
