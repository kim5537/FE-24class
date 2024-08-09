//math로 시작하는 수학객체 =

let num = 2.1234;
let num01 = 2.8765;

let maxNum = Math.max(10, 5, 8, 30);
let minNum = Math.min(10, 5, 8, 30);
//-----아래3개가 자주 사용됨//
let roundNum = Math.round(num);
//소수를 반올림
let floorNum = Math.floor(num01);
//소수를 버림
let ceilNum = Math.ceil(num);
//올림
let rudNum = Math.random();
//1미만의 실수값을 난수형태로 보여줌
let piNum = Math.PI;
//3.14~~~ // 원주율

document.write(maxNum, "<br/>");
document.write(minNum, "<br/>");
document.write(roundNum, "<br/>");
document.write(floorNum, "<br/>");
document.write(ceilNum, "<br/>");
document.write(rudNum, "<br/>");
document.write(piNum, "<br/>");

console.log(maxNum, minNum, roundNum, floorNum, ceilNum, rudNum, piNum);
