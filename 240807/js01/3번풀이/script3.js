//각 텍스트 마우스를 올린다ㅏ
//텍스트 찾아온다
//텍스트는 4개다.
//querALL를 써야한다.
//ALL이면 반복문 (forEach)쓸 것이다.
//addEventListener
//moustover || mouseenter
//mouseout || mouseleave

//각 테스트에 마우스가 올라갈 때마다 이미지 변경
//현재 이미지 출력하고 있는 node 찾기
//해당 node가 어떻게 이미지를 출력하고 있는지 확인 (백그라운드 이미지 속성)
//어떻게 하면 node의 속성값을 변경할 수 있는지 고민
//스크립트에서 어떻게 css 스타일 속성을 제어 할 수 있는지 생각

//텍스트에서 마우스가 떠나면 원 상태로 돌아온다.

const liItems = document.querySelectorAll("li");
//바로 에드이벤트리스너말고 하나하나의 요소를 찾아오기 위해 반복문 먼저
const photo = document.querySelector(".photo");

liItems.forEach((liItem, index) => {
  liItem.addEventListenrt("mouseenter", function () {
    let changeImage = this.getAttribute("date-img");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });
  liItem.addEventListenrt("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
