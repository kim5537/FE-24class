//사용자로 부터수학점수와 국어점수를 받자
// 함수를 사용해서 수학 +국어 점수의 평균 점수를 계산하여 알림창을 통해서 출력

// let math = Number(prompt("수학점수 입력"));

// if (math !== undefined;) {
//   let kr = Number(prompt("국어점수 입력"));
//   if (kr !== undefined;) {
//     function calc(math, kr) {
//       (math + kr) / 2;
//     }
//     alert(`${calc()}`);
//   }
// }

//해석
const arr = ["수학", "국어"];

function testAvg() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr} 점수는?`));
  }

  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}점 입니다!`);
