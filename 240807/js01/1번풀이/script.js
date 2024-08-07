const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.classList.toggle("active");
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
});
