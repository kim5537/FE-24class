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
      socialOnly: true,
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

export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tonkenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      //포스트 방식으로 값을 받아올 땐 이렇게 옵션값을 넣어줘야한다.
      //서버에서 값이 오기 때문에  json이 필요하다
      headers: {
        Accept: "application/json",
      },
    })
  ).json();

  // const json = await data.json();
  if ("access_token" in tonkenRequest) {
    const { access_token } = tonkenRequest;
    const apiUrl = " https://api.github.com";

    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();

    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      return res.redirect("/login");
    }
    const existingUser = await User.findOne({ email: emailObj.email });

    if (existingUser) {
      req.session.loggedIn = true;
      req.session.user = existingUser;
      return res.redirect("/");
    } else {
      const user = await User.create({
        email: emailObj.email,
        avatarUrl: userData.avatarUrl,
        socialOnly: true,
        username: userData.login,
        password: "",
        name: userData.name,
        location: userData.location,
      });
      req.session.loggedIn = true;
      req.session.user = user;
      return res.redirect("/login");
    }
  } else {
    return res.redirect("/login");
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
  const user = await User.findOne({ username, socialOnly: false });
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

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const see = (req, res) => res.send("see");
