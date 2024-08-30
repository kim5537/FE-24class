const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

let x = 0;
let y = 0;
let targetx = 0;
let targety = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `X: ${x} Y: ${y}`;

  // box.style.top = `${y}px`;
  // box.style.left = `${x}px`;
});

const loop = () => {
  targetx += (x - targetx) * speed;
  targety += (y - targety) * speed;

  box.style.top = `${targety}px`;
  box.style.left = `${targetx}px`;
  // console.log(x, y);
  // console.log(targetx, targety);
  window.requestAnimationFrame(loop);
};
loop();
