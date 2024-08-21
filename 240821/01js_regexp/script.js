// const regexp = /\d{3}/;

// const regexp = new RegExp(/\d{3}/)
// //정수 3자리로 되어있는 것을 정의한 것.
// console.log(regexp.test("hello"))
// console.log(regexp.test("123"))

// const str = "ES2024 is powerfull"
// const regexp = /es/
// console.log(str.match(/ES2024/))

// console.log(str.replace(/ES2024/, "javaScript"))


// console.log(regexp.test(str))
//const regexp = /es/ 때는 false
//const regexp = /es/i 때는 true ==> 대소문자 구분 x 


// console.log(str.match(/ES\d/))
// //2를 찾아온다
// console.log(str.match(/ES\d\d/))
// //0을 찾아온다.

// const hello = 'Hello, everyone.'
// // console.log(/H/.test(hello)) //true
// // console.log(/^H/.test(hello))// true // H로 시작하는 값 // 시작이 대문자 H 
// // console.log(/^h/.test(hello)) // false // 소문자 아님
// // console.log(/^h/i.test(hello)) // true // i을 붙여서 대소문자 구분안함

// // console.log(/one.$/.test(hello)) // true // one. 으로 끝남
// // console.log(/one$/.test(hello)) // false // .이 없음

// const str = "ES2024"
// console.log(str.match(/[0-9]/g))
// //[]범위지정
// //g 전체범위에서 찾아 배열로 
// console.log(str.match(/^[0-9]/g))
// // ^ 시작이 숫자인가?

// console.log(str.match(/[^0-9]/g))
// // []안 ^는 0-9를 제외한 값을 가져온다.

// const str = "Oooops"
// console.log(str.match(/o{2}/))
// console.log(str.match(/o{2,}/))
// console.log(str.match(/o{2,4}/))
// console.log(str.match(/o{2,4}/i))

// const str2= "ES2024(ES8) is powerful"
// const regexp = /ES2024|ES8/;
// console.log(regexp.test(str2))


//종합

//1.숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/; //숫자로 시작하고(^) 숫자가 한번이상반복도 허용 가능하고(+) 숫자로 끝나는 것($)
//2. 양의 정수만 가능한 정규표현식 패턴 
const regexp1 = /^[1-9]\d*$/; //여기선 *를 많이 쓰더라
//3.음의 정수만 가능한 정규표현식
const regexp2 = /^\-[1-9]\d*$/;
//4. 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;
//i도 가능하지만 a-zA-Z를 더 많이 쓴다.
//5. 숫자와 영문자를 찾아오도록하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;

//6 한글만 찾아오도록하는 패턴
const regexp5 = /^[가-힣]+$/;

//7 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

//8 예) 문자열의 길이가 5-10개 패턴
const regexp7 = /^.{5,10}$/;