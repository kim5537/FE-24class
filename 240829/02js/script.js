const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");
// console.log(cursorItem);

//3
let x = 0; // 커서의 좌표값
let y = 0;
let targetx = 0; //원의 좌표값
let targety = 0;
const speed = 0.1; // 원의 속도 딜레이 값

//1
window.addEventListener("mousemove", (e) => {
  // let x = e.pageX;
  // let y = e.pageY;

  //3번에 변경
  x = e.pageX;
  y = e.pageY;
  //3번에서 삭제
  // cursorItem.style.transform = `translate(${x}px,${y}px)`;
});

//4
const loop = () => {
  targetx += (x - targetx) * speed;
  targety += (y - targety) * speed;
  cursorItem.style.transform = `translate(${targetx}px,${targety}px)`;

  window.requestAnimationFrame(loop);
};
loop();

//2
buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
