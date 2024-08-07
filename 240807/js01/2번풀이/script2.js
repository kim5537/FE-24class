const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");
console.log(stars);

//노드리스트를 보자말자 반복문을 떠올리자.
stars.forEach((star, index) => {
  console.log(star, index);
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.remove("active");
      if (i <= index) {
        s.classList.add("active");
      }
      //같은코드지만 좀 더 멋나게 쓰기
      // if (i <= index) {
      //   s.classList.add("active");
      // } else {
      //   s.classList.remove("active");
      // }
    });
    let message = "";
    let imageURL = "";
    switch (index) {
      case 0:
        message = "별로에요";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요";
        imageURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥그래요";
        imageURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "마음에 들어요";
        imageURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주 좋아요";
        imageURL = "./img/star-lv5.png";
        break;
    }
    print.innerContent = `<img src="${imageURL}"> ${message}`;
  });
});
//그냥 for문을하면 조건식부터 하나하나 정의해줘야하는 불편함이 있다. 심지어 인덱스와 랭스도 다 가지고 오기 편하다.
