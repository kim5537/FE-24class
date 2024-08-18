// // const str5 = "Hello, everyone";
// // const array5 = str5.split("");

// // // console.log(array5);
// // //배열을 만들고 싶어서 나눠주는 스플릿을 사용해서 나눠주는 기능을 가진 스플릿의 본질이 흐려짐

// // const array05 = [...str5];
// // console.log(array05);
// // //문자열을 배열로 바꿔주는 함수.

// // const str6 = array05.join("");
// // //반대로 배열을 문자열로 바꿔주는 함수
// // console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// //값을 소문자로 받아 첫 글자를 대문자로 만들어 문자열로 다시 변환후 출력

// // const firstCh = string[0].toUpperCase();
// // const remainStr = string.slice(1);
// // const result = firstCh + remainStr;
// // document.write(result);

// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// document.write(result);
// //처음 문자열을 찾아. 대문자를 해서 배열로 만들기. --> 문재를 위해서 만듬

// 배열을 만들기
// 1. 생성자 함수를 사용해여 만들기

let arr = new Array();
arr[0] = "first";
arr[1] = "second";

//2.변수에 빈배열을 할당 및 선언
let season = [];
season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";

//3. 직접 배열을 선언하고 할당.
const pets = ["dog", "cat", "lion"];
