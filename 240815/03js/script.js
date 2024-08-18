// // const str = "hello";
// const str = "hello sir";
// const arr = ["today", "first", "theday"];

// console.log(str.length);
// console.log(arr.length);

// /// ++1번째 함수 charAt
// // str.charAt(4);
// console.log(str.charAt(4));

// ////////==========글자 갯수찾기 함수 만들기 ================/////////////
// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) {
//       count += 1;
//     }
//   }
//   return count;
// };
// ///값을 받을 함수/////
// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고싶은 문자은 무엇인가요?");

// //받은 값을 함수에 넣는 함수/////
// const result = counting(string, word);

// ///출력하는 함수////
// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다.`
// );

/// ++2번째 함수 indexOf() --

// const str1 = "Good morning, everyone, Beautiful morning.";
// console.log(str1.indexOf("morning"));

// //두번째를 찾고 싶을 땐
// let firstIndex = str1.indexOf("morning");
// console.log(str1.indexOf("morning", firstIndex + 1));

// //3. startsWith() endsWith() includ()
// const str2 = "Hello, everyone";
// console.log(str2.startsWith("Hello"));
// console.log(str2.startsWith("hello"));
// console.log(str2.startsWith("He"));

// console.log(str2.startsWith("el", 1));

// console.log(str2.endsWith("Hello"));
// console.log(str2.endsWith("everyone"));

// //es6 이전문법
// console.log(str2.indexOf("every") === 7);
// console.log(str2.includes("every"));

// let str3 = " ab cd ef ";
// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// console.log(str3.toUpperCase());
// console.log(str3.toLowerCase());

///문자열에서 특정 문자를 추출하는 방법
// //사용자가 올바르지 않는 정보값을 넣었을 떄 빼기위한 목적
// const str2 = "Good morning.";
// console.log(str2.length);
// // console.log(str2.substring(5));
// //인덱스값에서 시작되어진 문자를 찾아오라는 뜻
// //인자값을 두개를 받을 수 있다.
// console.log(str2.substring(0, 4));
// //두번 인덷스값은 미만까지의 인덱스 값을 가진 글자를 말한다.
// console.log(str2.slice(0, 4));
// //비슷하나 후에 나온 slice의 다른 점은 음수값을 사용할수있다.
// console.log(str2.slice(-5, 12));

const str5 = "Hello everyone";
console.log(str5.split(""));
