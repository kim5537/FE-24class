export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  //true라고 되어있지만 문자열로 인식한다. 때문에 형변환 필수
  res.locals.loggedInUser = req.session.user;
  res.locals.siteName = "YouTube";
  console.log(res.locals);
  next();
};
