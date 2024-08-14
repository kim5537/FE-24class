//--끝말잇기 게임--//

//1.제시어의 끝 단어를 확인
///*1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야함.
///*1-2. 3-1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야함.

//2.끝 단어로 시작하는 단어를 입력
///*2-1. 사용자가 입력한 단어가 무엇인지 알아야함.
///*2-2. 끝 단어로 시작하는 단어 = 사용자가 입력한 단어

//3.단어 입력 후 입력 버튼클릭
///*3-1. 입력버튼이 클릭 =>검증시작 (=이벤트가 필요하다)

//4. 문제 여부 판단 =>문제가없다 vs 문제가 있다.
///*4-1. 조건에 따라서 값을 어떻게 출력

// const button = document.querySelector(".search");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭");
//click에 문제가 없지만 전송을 할려면 클릭이 아닌 다른 이벤트를 사용해야한다.-리액트할때 막힘
// });

//---wordGame----//

const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myWord = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let fistword = myWord[0];
  if (lastword === fistword) {
    document.querySelector("#result").innerText = "정답!😁";
    document.querySelector("#word").innerText = myWord;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "땡!😥";
    document.querySelector("#myword").value = "";
  }
};

const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

//--LOTTO GAME--//

//1~45까지 6개의 숫자가 랜덤으로 중복없이 동시에 추출이 되어야 함

//1. 클릭 버튼을 컴퓨터에게 알려주기 (트리거)

//2. 클릭버튼 클릭시 숫자가 생성 (이벤트)

//3. js 안 내장 객체가 있다.(기본탐제) >> 숫자를 랜덤으로 생성해주는 함수가 존재.
///*3-1. ramdom() ==>0~1미만의 실수 & 난수 생성
////실수; 소수점을 가지고 있는 숫자
////난수: 불규칙적으로 숫자를 생성하는 행위
//-> 소숫점을 없애야한다. : 방법 3개가 있다
/////-->1. floor() =>소수점을 버림 ==>0이있어서 무조건 1더해야함 그리고 ==>0.9999의 최고값*45
////-->2.ceil() => 소수점을 올린다. ==>0.9999의 최고값*44
////-->3. round() =>소수점을 반올림
//4.중복 금지
///*4-1 set() 클래스를 사용한다. => 무작위로 생성된 숫자를 배열에 한개씩 감을 예정 => 중복된 값이 생성되면 1개로 합친다.
///4-2 6개 완성햇으나 합쳐지면 객수가 줄어듬 ==> 조건문 으로 재추첨 해야함.

const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  //구조분해할당 = 할당부분 mdn
  let myNumber = new Set();
  //Map 인스턴스의 set() 메서드는 이 Map에서 명시진 키와 값을 추가하거나 갱신합니다
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    //size == map객체의 항목 수
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다.";
  }
};

lottoButton.addEventListener("click", startLotto);

// console.log(lottoButton);
