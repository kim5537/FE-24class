//자바스크립트 for문을 활용하여 구구단 2~9단까지 웹 브라우져 화면에 출력

// const num = (n) => {

//   for(let i=1 ; i<=9 ; i++) {

//   }
// }

//해설

//행과 열을 만든때 중첩for문을 사용한다.
//빡은 행 안은 열을 만든다.

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`);
//   }
//   document.write("<br/>");
// }

//구구단

for (let a = 2; a <= 9; a++) {
  document.write(`<h2>${a}단 </hr>`);
  document.write("<br/>");
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} x ${b} = ${a * b}`);
    document.write("<br/>");
  }
}
