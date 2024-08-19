const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

//그냥 문자로 출력함

//앞 요소를 재외하고 출력할 함수
const tail = (arr) => {
  return arr.length > 1 ? arr.slice(1) : arr;
};
//arr는 참조변수  numbers를 인자값으로 tail매게변수에 참조변수로 arr 를 넣었다.

origin.innerText = numbers;
result.innerText = tail(numbers);
//tail이라는 함수를 선언하여 넘벌즈를 인자값으로 선언

// 매개변수? 참조변수? 인자값???
