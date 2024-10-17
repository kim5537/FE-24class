let initialState = {
  id: "",
  pw: "",
  authenticate: false,
}; //초기값
const authenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("Login SUEESS REDUCER");
      return {
        ...state,
        id: payload.id,
        pw: payload.pw,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default authenticateReducer;
