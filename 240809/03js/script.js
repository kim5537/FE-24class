const character = document.querySelector(".character");
console.log(character);

let degree = 0;
const loop = () => {
  //각도를 계산 ==>360도(deg)
  const rotation = (degree * Math.PI) / 180;
  //60분법을 레디안으로 바꾸는 공식. 60분법을 이해할수없기 때문
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);
  // 윈도우에 안쪽에 높이 깊이값 / 2 -50 = 정중앙에 위치하게 만든다
  //100은 이 그림의 크기이자 여기서 회전한 가상의 원의 반지름값이다.
  //Math.cos(rotation); 는 x값을 말한다.

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  requestAnimationFrame(loop);
  // console.log(rotation);
  //계속 반복시키기는 이런 애니메이션엔 셋인터벌이 아닌 재귀함수를 사용한다.
  //requestAnimationFrame는 미묘하게 한번 돌고 간다. 함수 본인을 안에 넣음으로 계속 반복하게 만드는 것.
};

loop();
