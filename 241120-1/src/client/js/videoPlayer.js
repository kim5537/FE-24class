const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
// const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");
const currentTimte = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");

let volumeValue = 0.5;
// console.log(video.volume);
video.volume = volumeValue;

const handlePlayclick = () => {
  if (video.paused) {
    playBtn.innerText = "Pause";
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

// const handlePause = () => {
//   playBtn.innerText = "Play";
// };

// const handlePlay = () => {
//   playBtn.innerText = "Pause";
// };

const handleMute = () => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "UnMute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;
};

const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(11, 19); // 밀리초를 초로 바꾸기
};

const handleLoadedMetaData = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currentTimte.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};

playBtn.addEventListener("click", handlePlayclick);
muteBtn.addEventListener("click", handleMute);
// video.addEventListener("pause", handlePause);
// video.addEventListener("play", handlePlay);
volumeRange.addEventListener("input", handleVolumeChange);
//change보다 더욱 실시간으로 값을 가져온다 ==> input
video.addEventListener("loadedmetadata", handleLoadedMetaData);
video.addEventListener("timeupdate", handleTimeUpdate);
