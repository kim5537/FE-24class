//리듀서 합치기
import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer"; // 로그인 리듀서
import productReducer from "./productReducer"; // 제품 리듀서

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});

//index 이름의 파일을 디폴트로 보고 먼저 해석한다. 그래서 reducer 파일 내에 index파일을 먼저 읽는다.
