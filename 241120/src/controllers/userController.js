import User from "../models/user";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res) => {
  const { email, username, password, name, location } = req.body;
  const pageTitle = "Join";

  //$or == 둘 중 하나라도 있으면 이란 의미 $or키 안에 벨류값은 배열안에 객체형으로 해줘야한다.
  const exists = await User.exists({ $or: [{ username }, { email }] }); //=> 하나라도 충족하면 true
  if (exists) {
    return res.render("Join", {
      pageTitle,
      errorMessage: "This username/email is already taken",
    });
  }

  // const usernameExists = await User.exists({ username }); //해당 내용이 있는지 확인후 boolean 값을 반환
  // if (usernameExists) {
  //   return res.render("join", {
  //     // pageTitle : "Join"
  //     pageTitle,
  //     errorMessage: "This username is already taken",
  //   });
  // }

  // const emailExists = await User.exists({ email });
  // if (emailExists) {
  //   return res.render("Join", {
  //     pageTitle,
  //     errorMessage: "",
  //   });
  // }
  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  res.redirect("/login");
};

export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("remove");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
