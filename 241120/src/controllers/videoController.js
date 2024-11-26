import { render } from "pug";
import Video, { formHashTags } from "../models/video";
import { response } from "express";

export const home = async (req, res) => {
  try {
    const Videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", Videos });
  } catch (err) {
    return res.render("server-error", err);
  }
};

export const search = (req, res) => res.send("search Videos");

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id); //매칭되는 값을 찾아줌

  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  //몽고db에서 값 찾아와 video에 담음
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video Not Fonund" });
  }
  //몽고db의 값 바꾸기 -
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: formHashTags(hashtags),
  });

  //값 저장하기 - save 편
  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags.split(",").map((word) => `#${word}`);
  // await video.save();
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: formHashTags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Videos");
};
