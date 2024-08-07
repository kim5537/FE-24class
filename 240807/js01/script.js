const triggerBack = document.querySelector("#triggerBack");

triggerBack.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb");
  gnb.style.right = "0";
  this.style.marginRight = "100px";
});
