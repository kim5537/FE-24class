const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
console.log(ctx);

// ctx.font = "60px arial";
// ctx.fillText("HELLO", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

ctx.font = "italic 60px serif";
ctx.fillText("JavaScript", 50, 70);

ctx.font = "bold 60px sans-serif";
ctx.fillText("JavaScript", 50, 150);
