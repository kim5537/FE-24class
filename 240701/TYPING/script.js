const content =
  "Hi!😉 I'm Ryeong,\n Front-End Developer!\n Welcome to my study :)";

const text = document.querySelector(".text");
//증감연산자(++)를 이용해 문자열의 0번부터 불러오기
let i = 0;

//복합대입 연선자 (+=)
//삼항조건 연산자(=== "\n" ? "<br/>" : txt) "일항" "이항":삼항 => 삼항조건 연상자
//조건문 if는 참이면 이렇게 해줘
const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};
//셋인터벌 = 특정주기로 뭘 해줘
setInterval(typing, 250);
