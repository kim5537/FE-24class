const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const human = contentAll[1];
const date = contentAll[2];
const textImg = contentAll[3];

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  // console.log(e.pageX - window.innerWidth / 2);
  //이게 중심을 기준으로 한 우리 마우스의 좌표값이 된다.
  x = e.pageX - window.innerWidth / 2;
  //움직임을 위해 재귀함수 //2
});

//2
const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 20}px)`;
  textImg.style.transform = `translateX(${-targetX / 10}px)`;
  window.requestAnimationFrame(loop);
};
loop();
