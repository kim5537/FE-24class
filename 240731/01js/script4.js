//폼요소(input) 입력된 값은 절대 전역요소를 찾을수없게 되어있다.

//이벤트라는 액션이 발생된 이후에만 value값을 찾아올수있다.

//전역변수의 값은 이미 읽고 내려감. 아직 아무것도 입력이 되어있지 않은 상태로 이미 읽어버렸다. 때문에 꼭 이벤트가 밸생할때 인식하게 시켜야한다.

const button = document.querySelector("input[type='button']");

const showSales = () => {
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  // console.log(price, rate);
  const savedPrice = price * (rate / 100);
  const resultPrice = price - savedPrice;

  document.querySelector(
    ".bottomInfo p"
  ).innerText = `상품의 원 가격은 ${price}원이고 할인률 ${rate}%일 때, ${savedPrice}원을 절약한 ${resultPrice}원에 구입할 수 있습니다.`;
};

button.addEventListener("click", showSales);
