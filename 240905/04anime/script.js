anime({
  targets: ".svg2 path",
  strokeDashoffset: [anime.setDashoffset, 0],
  //0은 첫 죄표점의 간격점을 말한다. 즉 첫 좌표부터 쓰겠다.
  duration: 8000,
  easing: "easeInOutSine",
  loop: true,
  direction: "alternate",
});
