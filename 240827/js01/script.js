//2
const showPositon = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=apptest&serviceKey=WlWuCu3O8MVJ%2B2%2FKxwU8WBmbKjiPfWSI4DVYtQmWxaXZzk3jrt5rMqvlK5KU5TAJBLY8Hn0iek&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      const data = json.response.body.items.item;
      console.log(data);

      // console.log(position);
      //우리의 위치를 가져오기
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      //카카오
      const mapContainer = document.querySelector("#map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      // 마커를 표시할 위치와 title 객체 배열입니다
      // const positions = [
      //   {
      //     title: "이젠 아카데미",
      //     latlng: new kakao.maps.LatLng(latitude, longitude),
      //   },
      //   {
      //     title: "그린 아카데미",
      //     latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
      //   },
      //   {
      //     title: "sbs 아카데미",
      //     latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
      //   },
      //   {
      //     title: "코리아IT아카데미",
      //     latlng: new kakao.maps.LatLng(37.4999467, 127.0354264),
      //   },
      //   {
      //     title: "하이미디어아카데미",
      //     latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
      //   },
      // ];

      let markers = [];
      for (let i = 0; i < data.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        //const imageSize = new kakao.maps.Size(24, 35);
        // 마커 이미지를 생성합니다
        //const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX), // 마커를 표시할 위치
          //title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          //image: markerImage, // 마커 이미지
        });
        markers.push(marker);
        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });
        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };
        const makeOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }
      clusterer.addMarkers(markers);
    });
};

//2
const errPosition = (err) => {
  alert(err.message);
};

//1
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPositon, errPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
