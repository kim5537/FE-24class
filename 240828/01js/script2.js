const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.globalAlpha = 0.3;
// //모든값의 알파값이 조절된다. - 채도
// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0,0,255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255,0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgb(255,255,0)";
// ctx.fillRect(350, 50, 100, 50);

//각요소 알파값 조절
ctx.fillStyle = "rgb(255,0,0,0.2)";
ctx.fillRect(50, 50, 100, 50);

ctx.fillStyle = "rgb(0,0,255,0.4)";
ctx.fillRect(150, 50, 100, 50);

ctx.fillStyle = "rgb(0,255,0,0.6)";
ctx.fillRect(250, 50, 100, 50);

ctx.fillStyle = "rgb(255,255,0,0.8)";
ctx.fillRect(350, 50, 100, 50);
