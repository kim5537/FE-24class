const Videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "2 minutes ago",
    views: 29,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "second Video",
    createdAt: "4 minutes ago",
    views: 1,
    comment: 2,
    rating: 3,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "3 minutes ago",
    views: 40,
    comment: 12,
    rating: 1,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", Videos });
};
export const search = (req, res) => res.send("search Videos");

export const watch = (req, res) => {
  const { id } = req.params;
  const video = Videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = Videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: Videos.length + 1,
    title,
    createdAt: "Just Now",
    views: 0,
    comment: 0,
    rating: 0,
  };
  Videos.push(newVideo);
  return res.redirect("/");
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const { title } = req.body;
  Videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete Videos");
};
