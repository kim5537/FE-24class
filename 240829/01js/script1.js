const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

//마름모 만들기
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(150, 150, 100, 100);
//그린후 이동시킴 그래서 트렌스레이트가 필요함

// ctx.translate(150, 150);
// ctx.rotate((Math.PI / 180) * 45);
// // ctx.strokeRect(150, 150, 100, 100);
// ctx.strokeRect(0, 0, 100, 100);

//확대 축소의 배율을 조정한다.
ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

ctx.save();
ctx.scale(3, 2);
// ctx.strokeRect(50, 50, 100, 50);
//좌표에도 영향을 준다. 좌표의 위치도 곱해진다. 즉
// 50=> 150 || 50=>100 || 300 ||1000 으로 바뀐것.
// ctx.strokeRect(20, 70, 100, 50);

// ctx.strokeRect(200, 50, 100, 50);
//save때문에 restore 전 까지 계속 scale을 받고있다.

ctx.strokeRect(20, 70, 100, 50);
ctx.restore();
//리스토어를 하면 밑 공식엔 영향을 안 줄 수 있다.
ctx.strokeRect(200, 50, 100, 50);
