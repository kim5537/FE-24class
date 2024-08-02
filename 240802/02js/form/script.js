// const button = document.querySelector("input[type='submit']");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // const orderName = document.querySelector("#orderName");
//   const orderName = document.order.orderName;
//   //form네임으로 해당 값을 찾아온 것.
//   console.log(orderName.value);
// });

// // console.log(document.forms[0].elements[4]);
// //form이 가진 특이한 속성중 하나인 forms는 안에 form요소들을 배열로 가지고 있다.

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);
//select는 option으로 이뤄진 배열의 형태를 띈다.

select.addEventListener("change", function () {
  // console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다. 가격은 5000원입니다.`);
});
//유사배열.배열과 달리 selectesindex라는 속성을 가지고 있다

// const radioBtn = document.order.userAge;
// console.log(radioBtn);

const checkBox = document.querySelector("input[name='alarm']:checked");
//체크가 되어진 속성값만 가져오기 때문에 all이 아니다.
