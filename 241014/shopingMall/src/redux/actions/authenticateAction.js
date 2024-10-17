//액션 객체 생성
const login = (id, pw) => {
  return (dispatch) => {
    console.log("로그인 성공 액션");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, pw } });
  };
};

export const authenticateAction = { login };
//객체를 가져가는데 그 객체안에 login이라는 함수를 가져가는 거 뿐
