//1.웹브라우저에게 클릭 이벤트 대상 알리기

//queryselect()
//addEventListener()

//2.클릭을 했을 때,css로 정의해놓은 가상 클래스를 원하는 요소에 적용 시킨다.
//classList
//add() \\ remove()
//button 기본속성이 데이터를 보내는건데 이번엔 필요없음.=> 기복속성을 방해해야함 preventDefault()

//2.1 가상클래스 = filledA & filledB

// const femailBtn = document.querySelector("#femalebtn");
const femailBtn = document.getElementById("femalebtn");
const maleBtn = document.getElementById("malebtn");
//둘 다 가능하다 getElementById 아이디만 찾을수있어서 #가 필요하지 않음-속도가 빠름. 그러나 querySelector는 모두 찾을 수 있기에 #가 필요하다.-유연함

femailBtn.addEventListener("click", (e) => {
  event.preventDefault();
  femailBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

mailBtn.addEventListener("click", (e) => {
  event.preventDefault();
  femailBtn.querySelector("i").classList.toggled("filledB");
  maleBtn.querySelector("i").classList.remove("filledA");
});
