//원기둥의 부피를 계산하자
//원기둥 밑 면적 * 높이
//원의 부피 : 파이 * r제곱

const form = document.querySelector("form");
const result = document.querySelector("#result");

// function Cylinder(diameter, height) {
//   //큰 대문자다? 생성자 함수.
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//     //toFixed(2) 소수점 두번째 자리까지 나태내달라.
//   };
// }

//class로 선언하기
class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
  getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  if (
    diameter === "" ||
    height === "" ||
    isNaN == typeof diameter ||
    isNaN == typeof height
  )
    //isNan = is no a number == 숫자가 아닌다라는 의미
    result.innerText = `정확한 지름값과 높이값을 입력해주세요!`;
  else {
    const cylinder01 = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()}입니다!`;
  }
});

// const Cylinder01 = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${Cylinder01.getVolume()} 입니다`);
