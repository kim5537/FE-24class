const imgAll = document.querySelectorAll(".imgWrap .parallaxImage");
const subPageImge = document.querySelector(".subPage .parallaxImage");

const totalNum = imgAll.length;
let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;
//3
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  // 다른 함수에 사용하기 위해 let 으로 0d을 답은 그릇을 생성
  imgAll.forEach((image, index) => {
    if (index < 4) {
      image.style.transform = `translateY(${
        -scrollNum / (2 * totalNum - index)
      }px)`;
    }
  });
});

//1
window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});
//2
const loop = () => {
  targetX += (x - targetX) * speed;
  imgAll[4].style.transform = `scale(1.1) translate(${-targetX / 100}px , ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imgAll[5].style.transform = `scale(1.1) translate(${targetX / 80}px,${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  subPageImge.style.transform = `scale(1.1) translateX(${-targetX / 60}px)`;
  window.requestAnimationFrame(loop);
};

loop();
