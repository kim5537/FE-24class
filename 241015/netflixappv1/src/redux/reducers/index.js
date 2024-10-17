import { combineReducers } from "redux"; //리듀서들을 특정 키값안에 매칭 시킴 리듀서 묵기
import movieReducer from "./movieReducer";

export default combineReducers({ movie: movieReducer });
