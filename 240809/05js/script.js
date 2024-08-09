//가위바위보 중 컴과 나 각각 선택
//같은 값 == 맞췄다
//아니면 틀렸다.
document.write(`<h1> ♦컴퓨터 가위·바위·보 맞추기 게임♦ </h1>`);
const game = prompt("가위,바위,보 중 선택하세요", "가위");
let gameNum = "";

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 입력하셨습니다");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);
document.write(`<img src="./img/math_img_${com}.jpg">`);

if (gameNum === com) {
  document.write(`컴퓨터와 같은 마음입니다`);
} else document.write(`아직 우린 서로 몰라요!`);
