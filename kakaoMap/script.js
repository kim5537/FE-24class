//current Position
const showPosition = (Position) => {
  const latitude = Position.coords.latitude;
  const longitude = Position.coords.longitude;
  //kakao Map
  const container = document.querySelector("#map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  //olibe store info
  const positions = [
    {
      title: "올리브영 강남 우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      adress: "서울시 강남구 강남대로 320",
      img: "./img/img1.jpg",
      info: "영업시간 : 오전 8시~ 저녁 10시",
    },
    {
      title: "올리브영 강남 중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      adress: "서울시 강남구 강남대로 320",
      img: "./img/img2.jpg",
      info: "영업시간 : 오전 9시~ 저녁 9시",
    },
    {
      title: "올리브영 강남 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      adress: "서울시 강남구 강남대로 320",
      img: "./img/img3.jpg",
      info: "영업시간 : 오전 9시~ 저녁 8시",
    },
    {
      title: "올리브영 강남 서초대로점",
      latlng: new kakao.maps.LatLng(27.4940977, 127.0158607),
      adress: "서울시 강남구 강남대로 320",
      img: "./img/img5.jpg",
      info: "영업시간 : 오전 9시~ 저녁 8시",
    },
    {
      title: "올리브영 강남 역삼점",
      latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
      adress: "서울시 강남구 태헤란로 111",
      img: "./img/img5.jpg",
      info: "영업시간 : 오전 9시~ 저녁 10시",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const content = `
    <div class="wrap">
      <div class="info">
        <div class="title">${positions[i].title}</div>
        <div class="body">
          <div class="img">
            <img src="${positions[i].img}" width="73" height="70">
          </div>
          <div class="desc">
            <div class="ellipsis">${positions[i].adress}</div>
            <div class="jibun ellipsis">${positions[i].info}</div>
            <div><a href="https://www.oliveyoung.co.kr/" target="_blank" class="link">쇼핑몰 바로가기</a></div>
          </div>
        </div> 
      </div>
    </div>
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });

    // const infowindow = new kakao.maps.InfoWindow({
    //   content: positions[i].title,
    // });
    // const makeOverListener = (map, marker, infowindow) => {
    //   return () => {
    //     infowindow.open(map, marker);
    //   };
    // };

    // const makeOutListener = (infowindow) => {
    //   return () => {
    //     infowindow.close();
    //   };
    // };

    // kakao.maps.event.addListener(
    //   marker,
    //   "mouseover",
    //   makeOverListener(map, marker, infowindow)
    // );
    // kakao.maps.event.addListener(
    //   marker,
    //   "mouseout",
    //   makeOutListener(infowindow)
    // );
  }

  //kakao marker
  const markerPosotion = new kakao.maps.LatLng(latitude, longitude);

  const marker = new kakao.maps.Marker({
    position: markerPosotion,
  });

  marker.setMap(map);

  //kakao marker info window
  const iwContent = `<div class ="label"><span class="left"></span><span class="center">🎈현제 위치!</span><span class="right"></span></div>`;
  // const iwRemoveable = true;
  const iwPosition = new kakao.maps.LatLng(latitude, longitude);
  const infowindow = new kakao.maps.CustomOverlay({
    content: iwContent,
    position: iwPosition,
    // removable: iwRemoveable,
  });
  infowindow.setMap(map);

  // kakao.maps.event.addListener(marker, "click", function () {
  //   infowindow.open(map, marker);
  // });
};

const errorPosition = (err) => {
  alert(err.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
