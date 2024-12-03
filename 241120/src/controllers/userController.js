import User from "../models/user";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res) => {
  const { email, username, password, password1, name, location } = req.body;
  const pageTitle = "Join";

  if (password1 !== password) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match",
    });
  }
  //$or == 둘 중 하나라도 있으면 이란 의미 $or키 안에 벨류값은 배열안에 객체형으로 해줘야한다.
  const exists = await User.exists({ $or: [{ username }, { email }] }); //=> 하나라도 충족하면 true

  if (exists) {
    return res.status(400).render("Join", {
      pageTitle,
      errorMessage: "This username/email is already taken",
    });
  }

  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
    res.redirect("/login");
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle, errorMessage: error._message });
  }
};

export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("remove");

export const getLogin = (req, res) =>
  res.render("login", {
    pageTitle: "Login",
  });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exits",
    });
  }

  const ok = await bcrypt.compare(password, user.password);
  // 두 값을 비교 후 boolean 값
  if (!ok) {
    return res
      .status(400)
      .render("login", { pageTitle, errorMessage: "Wrong password" });
  }
  // res.end();
  // console.log("user login coming soon!");
  req.session.loggedIn = true;
  //loggedIn 이라는 키를 만들고 로그인이 되면 true 값을 저장하게 만름
  req.session.user = user; // 세션에서 유저 정보 비교
  return res.redirect("/");
};

export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
