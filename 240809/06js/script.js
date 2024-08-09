// 이기면 축하
//아니면 아쉽
const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".user-choice");
const winner = document.querySelector(".result");
const result = ["가위", "바위", "보"];

let massage = "";

const show = (user, computer, massage) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = massage;
};

const game = (user, computer) => {
  if (user === computer) massage = `무승부`;
  else {
    switch (user + computer) {
      case `가위보`:
      case `바위가위`:
      case `보바위`:
        massage = `나의 승리!`;
        break;
      case `가위바위`:
      case `바위보`:
      case `보가위`:
        massage = `컴퓨터 승리!`;
        break;
    }
  }
  show(user, computer, massage);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  //어떠한 값을 받아 연산처리한다. = 함수 = 값을 받아서 매개변수로 값을 받아 처리한다.
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
