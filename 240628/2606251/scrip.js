//1.card_item 각 요소에 마우스오버하면, 각 item들이 위쪽으로 올라오도록 하고 싶다.
//1.1 웹브라우져가 card item들이 어떤 요소들인지 알게끔 도와줘야한다.
//1.1_1 웹 브라우저는 dom 객체 모델을 가지고 있으니까 해당 dom에서 card_item들의 node를 찾아와야한다.<<문법의 시작
//1.1_1_1 dom에서 원하는 node를 찾아 올려면 querySelector() 혹은 getELementById()등의 함수를 사용 할 수 있다.

//1.2 card_item이 1개가 아니라. 총 5개이며, 이 5개 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야한다.

//2. 만약 마우스가 a아이템 위에있다가, b 아이템으로 이동하면 a 아이템은 다시 원래의 위치로 돌아오고, b아이템은 위쪽으로 올라오게 하고싶다.

const items = document.querySelectorAll("#card_items li");
// console.log(items); <<확인하는 것
//forEach 반복. 함수안에 함수를 넣는다
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // console.log("ok");
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});
//자바에서 스타일 줄때는 스타일이라는 단어를 꼭 넣어줘야한다.

//메뉴 나오기//
//1. 컴퓨터에게 상단 nav ul&li 태그를 인지

//2. 상단 nav요소에게 마우스 오버하면 이벤트가 실행
//2.1 active라는 가상 클래스가 실행된다.(=텍스트가 두꺼워지고 색이 검정이 된다.)
//2.2 하단에 lnb요소의 opactity value 1이 되어야한다.

//3.mouseleave 혹은 mouseout 기능을 활용해서 마우스가 옆에 있는 li태그로 이동하면 기존의 이벤트는 제거 , 신규이벤트가 이전 설정했던 기능을 그대로 구현할수있어야한다.

const gnbLi = document.querySelectorAll(".topNav > li");
// console.log(gnbLi);
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    // console.log("overok");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

//background image change

//js배열을 사용할것

const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

const bgImg = document.querySelector("#backglound_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)),
  url(./img/${bgImgs[0]})`;

const topContents = document.querySelector("top_contents");
const contentTit = topContents.querySelector(".top_centents_title");
const contentDesc = topContents.querySelector(".top_contents_desc");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)),
      url(./img/${bgImgs[index]})`;
        contentTit.innerText = title;
        contentDesc.innerText = description;
      });
    });
  });
