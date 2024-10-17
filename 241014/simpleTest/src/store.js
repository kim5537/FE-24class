import { createStore } from "redux"; //왜 x인가? js가 업뎃되면서 같이 업뎃 되었음 // 지금은 공홈이 설명하는대로 함
import Reducer from "./Reducer";

let store = createStore(Reducer);

export default store;
