import React, { useState } from "react";

const Body2 = () => {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  const handleOnChange = (e) => {
    console.log("현재수정대상:", e.target.name);
    console.log("수정값", e.target.value);
    setState({
      ...state, // 초기값이 객체이기 때문에 객체여야한다. setState의 인자값도 객체여야한다.
      [e.target.name]: e.target.value, // 대괄호 표기법
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          onChange={handleOnChange}
          type="date"
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default Body2;
