//Geolocation
//위치파악
const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  //클릭 이벤트가 일어났을 때 나오는 콜백함수이기도 하기 때문에 getCurrentPosition의 위치값을 인자값으로 받아 올 수 있다.
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 :${position.coords.latitude}, 경도 :${position.coords.longitude}`;
};

const erroPosition = (err) => {
  //애러도 에러객체가 생긴다.
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    // 혹시 없는경우를 대비하여 if를 주는 것이 좋다.
    // window.navigator.geolocation.getCurrentPosition() // 윈도우 삭제 가능
    window.navigator.geolocation.getCurrentPosition(showPosition, erroPosition);
    console.log(erroPosition);
    // console.log(navigator);

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    //실시간 위치 파악
    let watchId = navigator.geolocation.watchPosition(
      //겟은 일회적으로 가져오지만 와치는 이동에 맟춰 실시간으로 가져온다.
      showPosition,
      erroPosition,
      options
    );
    //특정상황ㅇ에 와치포지션 사용
    setTimeout(() => {
      navigator.geolocation.clearWatch();
      //
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});
