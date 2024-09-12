import { gatEmotionImgById } from "./util";
import { Routes, Route, Link } from "react-router-dom";
//BrowserRouter를 index에 넣는방법. index는 app의 부모
import emotion1 from "./emotion/emotion1.png";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/New"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
        <Link to={"/Edit"}>Edit</Link>
      </div>
    </div>
  );
}

export default App;
