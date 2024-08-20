//재생 버튼
const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const progressCover = document.querySelector(".progress")
const player = document.querySelector(".player")
//play & btn icon
const play = () => {
  playButton.innerText = "||";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

//set volume
const setVolume = (e) => {
  video.volume = e.target.value;
};

//video time
const formatting = (time) => {
  //콘솔로 찍으면 플레이 초가 나온다.
  let sec = Math.floor(time % 60);
  //전채 초에서 60을 나눈 나머지 값이 초이다
  let min = Math.floor(time / 60);
  // 전체초에서 60을 나눈 몫의 값이 분
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  // 한자리수일때 앞에 0을 넣어주자.
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

//time inner
const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  //currentTime 영상소스의 현재 재생되고 있는 시간을 말하는 함수
  duration.innerText = formatting(video.duration);
  //duration 영상의 총 재생시간을 말하는 함수
};
// 시간에 따라 빨간색 바가 움직이는 함수
const updateProgress = ()=>{
  const progressBar = document.querySelector(".bar");
  const progressPointer= document.querySelector(".circle");
  //백분율 : 현재값/기준값 *100
  const duration = video.duration; //기준값
  const currentTime = video.currentTime; //현재값
  const percent = (currentTime/duration)*100
  progressBar.style.width =  `${percent}%`
  //circle은 퍼센트가 아니다. absolutdp left의 px단위로 움직여야한다.
  const progressBarWidth = progressCover.clientWidth
  // console.log(progressBarWidth) // 550
  const newPositon = (currentTime/duration)*progressBarWidth - 1;
  //-1은 미묘하게 멀어서 우리가 강제로맞춘거야. 그냥 눈대충으로 맟췄엉
  //clientWidth 해당요소의 가로값
  progressPointer.style.left = `${newPositon}px`
}

// 클릭했을때 해당 초로 이동해서 영상을 재생하는 이벤트 주기
//1. 브라우저 창을 기준으로 좌우상하 측면에서 얼만큼 떨어져있는가를 알수있게 해주는 속성이 있다. : offset ( ==> offsetLeft 왼쪽 )
//2. page x : 현재 브러우저 내에 x 좌표값을 찾아오도록 해주는 속성
const videoPoint = (e) => {
  // console.log(e.pageX); // 클릭한 지점 
  // console.log(player.offsetLeft); // 해당요소가 문서 전체에서 위차한 부분 
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  //전역이 아니여서 다시 들고옴 == 해당 바의 가로 길이
  const duration = video.duration; // 또 들고옴 = 영상의 길이
  const clickedTime = (mouseX/progressBarWidth)*duration;
  // 클릭타임은 = (클릭한 위치 / 해당문서요소의 가로길이) * 영상의 전체 길이
  video.currentTime = clickedTime;
};




playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
//timeupdate 비디오가 현재 재생되고 있는 시간이 업데이트 되고 있다는 의미의 핸들러.
video.addEventListener("timeupdate",updateProgress)
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click",(e)=>{videoPoint(e)} )

