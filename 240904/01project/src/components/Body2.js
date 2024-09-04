import React, { useState } from "react";

const Body2 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Body2;
