// toggle event
const toggleBtn = document.querySelector(".trigger");
const gnbMobile = document.querySelector(".MobileList");
console.log(gnbMobile);

toggleBtn.addEventListener("click", () => {
  // console.log("ok");
  gnbMobile.classList.toggle(".open");
  // this.classList.toggle(".active");
});
