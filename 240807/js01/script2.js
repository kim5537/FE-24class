//ul구현 후
//이벤트 구현 고민
//별. 폰트어썸 에서 찾아오기 ==>querALl
//별 클릭하면 컬러변경.
//어떤별을 클릭하던지 간에 별 안의 색상을 제거한다는 전제조건을 깔자. 줄어들때를 위해
//조건물으로 선택된 별의 갯수에 따라 이미지및 문장 변경

const stars = document.querySelectorAll("#stars>li");

const textInner = document.querySelector(".textInner");
console.log(textInner);
const img = document.createElement("img");

const imgList = ["star-lv1", "star-lv2", "star-lv3", "star-lv4", "star-lv5"];
textInner.appendChild(img);
