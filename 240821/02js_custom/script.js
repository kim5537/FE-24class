//프레임
const frame = document.querySelector("section");
//8개 요소
const lists = document.querySelectorAll("article");
//4) 노래 스왑
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
//5
const audios = frame.querySelectorAll("audio");

//각도
const deg = 45;
//1번의 증가 값을 넣을 그릇 ==> 다른 곳에서도 쓸 예정
let i = 0;
//4) 각도회전을 위한 변수. 위에 i를 그대로 사용하면 펼쳐진 이미지에 영향을 주기때문
let num = 0;

// 1) 8개 요소의 회전
lists.forEach((list) => {
  //(1-2)
  //article 안에 img
  //article을 하나식 반복적으로 돌리니까 전역이아닌 지역으로 할당/
  const pic = list.querySelector(".pic");

  //(1-1)
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  //트렌스폼은 순서가 중요하다.
  //부모요소 섹션안에 8개 요소가 앱솔로 모여있고 점차 45도로 기울어져있어야한다.= 45도 곱하기 배수가 되어야한다 = 요소의 인덱스값을 찾아오면 된다.
  //외부로 나가는건 -값을 가진다. 그래서 -을 주는 것.
  //(1-2)
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  //(1-1) 증감도 필요하다.
  i++;

  //펄쳐진 요소들을 만들고 움직이기 위해 scss로 움직임을 주기로 넘어감
  //3) 시디 회전
  const pause = list.querySelector("ul li:nth-child(1)");
  const play = list.querySelector("ul li:nth-child(2)");
  const load = list.querySelector("ul li:nth-child(3)");
  //querySelectorAll이 아니다. forEach로 개별 요소를 들고오기 때문
  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").load();
    e.target.closest("article").querySelector("audio").play();
  });
});

//5 -- 회전에 맞춰 음원재생
const initMusic = () => {
  for (let audio of audios) {
    //음원 리셋 & 회전되는 그림 멈춤기
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  }
};

//4) 노래 스왑
//(4-2) on 클래스 부여 -기준점 만들기 ==> 아이템들 인덱스값과 맞추기위해 0으로 시작
let active = 0;
//(4-2) prev , next를 클릭하면 회전 하는데 전체 총 갯수를 기준으로 몇번째 회전을 하고 있는지 체크용
const len = lists.length - 1; //==> 현재 아이템들의 마지막 인덱스값 (지금은 7)
//(4-2-2)
const activation = (index, lists) => {
  for (let list of lists) {
    //모든 리스트에 온 삭제
    list.classList.remove("on");
  }
  //가운데에 온 넣기
  lists[index].classList.add("on");
};

//(4-1) 버튼 클릭시 노래 변경
prev.addEventListener("click", () => {
  //5번 함수 실행호출
  initMusic();

  num++; // 일단 하나 증가.
  //(4-1) 노래 변경
  frame.style.transform = `rotate(${num * deg}deg)`;
  //4-2-3
  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  //5번 함수 실행호출
  initMusic();

  num--; // 일단 하나 감소.
  //(4-1) 노래 변경
  frame.style.transform = `rotate(${num * deg}deg)`;

  //(4-2) on 클래스 부여
  // active++;
  // console.log(active);
  //(4-2-2) 총 갯수(8)개가 넘으면 처음에게 다시 on부여
  active === len ? (active = 0) : active++;
  activation(active, lists);
});
