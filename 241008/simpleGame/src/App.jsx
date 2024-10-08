import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const Globalstyle = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const choice = {
  rock: {
    name: "rock",
    img: "https://ih1.redbubble.net/image.4161882756.6361/raf,360x360,075,t,fafafa:ca443f4786.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://thumbs.dreamstime.com/b/vector-cartoon-cute-scissors-school-kawaii-illustration-274221781.jpg",
  },
  paper: {
    name: "paper",
    img: "https://as2.ftcdn.net/v2/jpg/03/31/06/19/1000_F_331061950_VJSr04XPTdZbe52ZRpsmzbCFncPxfHe1.jpg",
  },
};
const App = () => {
  //내값을 box에게 보내기 위해 state를 사용
  const [userSelect, setUserSelect] = useState(null); // 사용자가 첨엔 아무것도 안 눌렀으니까 null
  //컴퓨터 state
  const [computerSelect, setComputerSelect] = useState(null);
  //받은 결과값 관리 ( 하단 win )
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    //대괄호 표기법으로 키에 접근. -> 대괄호 표기법은 안에 문자열 ("") 을 사용해서 키를 적는다.
    //prosp는 객체형태를 가지기 때문에 {}를 안 써도댐 -->choice가 이중객체이기 때문에 원래는 사용해야하나 props는 객체
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    //object.keys(객체) 객체 안 키만 모아 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]; //> 문자를 출력하니까 대괄호표기법
    return choice[final];
  };

  const judgeMent = (user, computer) => {
    //매개변수를 참조변수 형태로 기입 --> 두가지 값을 가져야하기 때문
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  return (
    <>
      <Globalstyle />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default App;

//가위바위보
// 컴퓨터와 내가 가위바위보를 한다고 가정해보자.
// 컴퓨터 선택(랜덤함수를  통해서 값이 나온다.) vs 나의 선택(자의 선택 ==> 가위바위보 선택을 위한 버튼이 필요)
//결과를 보여줄 출력 공간이 필요하다.
//이벤트가 필요 -> 콜백함수를 통해서 --> state가 필요하다.
