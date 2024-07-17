const female = document.querySelector("#femalebtn");
const male = document.querySelector("#malebtn");

female.addEventListener("click", (e) => {
  e.preventDefault();
  female.querySelector("i").classList.toggle("filledA");
  male.querySelector("i").classList.remove("filledB");
});

male.addEventListener("click", (e) => {
  e.preventDefault();
  male.querySelector("i").classList.toggle("filledB");
  female.querySelector("i").classList.remove("filledA");
});
