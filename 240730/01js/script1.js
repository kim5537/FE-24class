//사용자에게 화씨온도를 받아 콘솔창에 해당 온도를 섭씨로 변환 했을 떄 값을 출력
//섭씨온도 = (화씨온도-32)/1.8

// const temperature = prompt("섭씨온도 변환기");

// const temperature02 = (temperature - 32) / 1.8;
// console.log(temperature02);

//---------------------해설
const fah = parseFloat(prompt("화씨온도를 입력하세요", "ex.45"));

// console.log(typeof fah);
const cel = ((fah - 32) / 1.8).toFixed(2);
// console.log(cel);

//팝업으로 띄우기
alert(`화씨온도 ${fah}도는 섭씨온도 ${cel}도 입니다`);
