const orderButton = document.querySelector("#order");
console.log(orderButton);
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textnode = document.createTextNode(title.innertext);

  newH.style.fontsize = "2rem";

  const newImg = document.createElement("img");
  const src = document.createAttribute("src");
  src.value =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZQRAyDgIfPC5EvpHQrrq2xarVo2YFeKa2Q&s";
  newImg.setAttributeNode(src);

  newH.appendChild(textnode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
