//card img의 움직임
const cardItems = document.querySelectorAll("#card_items li");

cardItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

//nav에 토글
const gnbli = document.querySelectorAll(".topNav > li");

gnbli.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("action");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("action");
    }
  });
});

//background image 변경과 소개글  변경
const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];

const bgImg = document.querySelector("#background_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(255, 255, 255, 0.7)), url(./img/${bgImgs[0]})`;

const topContents = document.querySelector("#top_contents");
const contentTit = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_desc");

fetch("./data.json")
  .then((Response) => Response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;

    cardItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(255, 255, 255, 0.7)), url(./img/${bgImgs[index]})`;
        contentTit.innerText = title;
        contentDesc.innerText = description;
      });
    });
  });
