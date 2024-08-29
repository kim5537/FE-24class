const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    //움직임
    // this.dx = Math.floor(Math.random() * 4) + 1;
    // this.dy = Math.floor(Math.random() * 4) + 1;
    //빨라진당.
    this.dx = Math.floor(Math.random() * 8) + 1;
    this.dy = Math.floor(Math.random() * 6) + 1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    //추가하면서 바로 그리게 해야함.
    this.draw();
  }
}

// const circleOne = new Circle(100, 100, 50, "red");
// const circleTwo = new Circle(200, 200, 20, "blue");
// circleOne.draw();
// circleTwo.draw();
// console.log(circleOne);

//객체형태 하나가 원 하나를 생성한다.
//우린 원 20개가 필요하다 = 20개의 객체가 필요
// 반복문을 돌리기 ==> 태생적으로 반복문이 가능한 것은 배열 뿐. 배열에 담자.

// const objs = [];
// //기존에 객체가 없는 상태이기 때문에 반복문중 for만 가능하다.
// for (let i = 0; i < 20; i++) {
//   const radius = Math.floor(Math.random() * 50) + 10;
//   //그냥 임으로 49기준을 잡자
//   //0의 원이 나올수도 있으니 최소값도 잡자 .현재는 10이다.
//   const x = Math.random() * (canvas.width - radius * 2);
//   const y = Math.random() * (canvas.height - radius * 2);
//   //캔퍼스 밖으로 안 나가기 위해 지름만큼 뺌
//   const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
//     Math.random() * 255
//   )},${Math.floor(Math.random() * 255)})`;
//   objs.push(new Circle(x, y, radius, color));
// }
// console.log(objs);

// objs.forEach((obj, index) => {
//   // objs[index].draw();
//   obj.draw();
// });

//움직임 추가////////////////////////하단 호출부와 const x,y가 달라짐.
const objs = [];
//기존에 객체가 없는 상태이기 때문에 반복문중 for만 가능하다.
for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  //그냥 임으로 49기준을 잡자
  //0의 원이 나올수도 있으니 최소값도 잡자 .현재는 10이다.
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  //캔퍼스 밖으로 안 나가기 위해 지름만큼 뺌
  //radius를 더해줘야 애니메이션을 줄 때 벽에서 걸리는 요소가 생긴다.
  const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  objs.push(new Circle(x, y, radius, color));
}
console.log(objs);

// objs.forEach((obj, index) => {
//   // objs[index].draw();
//   obj.draw();
// });

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
};
update();
