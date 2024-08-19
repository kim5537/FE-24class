//재생 버튼
const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");

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

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
//timeupdate 비디오가 현재 재생되고 있는 시간이 업데이트 되고 있다는 의미의 핸들러.
volumeBar.addEventListener("change", setVolume);
