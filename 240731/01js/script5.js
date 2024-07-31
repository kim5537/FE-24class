const subject = prompt("신청과목 선택", "1-html . 2-css . 3-js");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하였습니다");
//     case "2":
//       alert("CSS을 신청하였습니다");
//     case "3":
//       alert("JS을 신청하였습니다");
//   }
// }
//작성하면 안댐. 참거짓 확인이 아닌 하나만 읽고 끝낸다. 그러나 if를 사용하였기에 2번을 선택해도 종결이 안되고 밑에까지 내려간다. 때문에 case에 선택을 하면 멈출 break를 넣어줘야한다. 그렇지 않으면 마지막것이 출력

if (subject !== null) {
  switch (subject) {
    case "1":
      alert("HTML을 신청하셨습니다");
      break;
    case "2":
      alert("CSS을 신청하셨습니다");
      break;
    case "3":
      alert("JS을 신청하셨습니다");
      break;
    default:
      alert("잘못입력했습니다.");
  }
}
//선택사항이 없으면 기본값인 default를 보여준다.
