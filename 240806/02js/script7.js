const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const newVideo = document.createElement("video");
//비디오태크를 생성하겠다는 것. createElement 알아볼 것
const srcVideo = document.createAttribute("src");
//속성을 생성하겠다.
const widthVideo = document.createAttribute("width");
const autoPlayVideo = document.createAttribute("autoplay");

srcVideo.value = `videos/${videos[0]}`;
widthVideo.value = "700";

newVideo.setAttributeNode(srcVideo);
//src 속성을 비디오에 넣어주겠다.
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(autoPlayVideo);
container.appendChild(newVideo);
//컨테이너 밑에 자식으로 비디오태그가 들어간다는 뜻

newVideo.addEventListener("click", function () {
  if (newVideo.paused) {
    newVideo.play();
  } else {
    this.pause();
    //pause() 함수는 멈춤이라는 함수이다.
  }
});

//슬라이드는 최초의 브라우저 마운트가 되었을 때. 0번째 슬라이드부터 시작. ==> 꼭 기억하기

let i = 0;
//i인 이유는 index를 바꾸기 때문에 보편적으로 i라고 한다.
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    } else if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    }
    srcVideo.value = `videos/${videos[i]}`;
  });
});
