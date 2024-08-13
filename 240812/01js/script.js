window.onload = function () {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  //랜덤은 1미만의 소숫점만 나오기 때문에 5 곱하기를 하면 4.9999~ 가 최대로 나온다.
  //그러나 우리는 소수점이 필요없기때문에 floor를 한다.
  document.body.style.backgroundImage = `url(./img/bg-${randomNumber}.jpg)`;
  //이미지를 바꾸기 위해선 숫자를 랜덤으로 해야하기 때문에 수학개체의 랜덤을 사용해야한다.
};

//css를 제어하기 위해선 style을 꼭 써야하고 윈도우는 생략이 가능하기 때무넹 window.document가 아닌 document만 적는다.

//onloade는 새로고침할때마다 바뀌는 윈도우의 이벤트핸들러가 있다.
