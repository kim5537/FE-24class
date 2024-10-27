//top
const TechnologyUl = document.querySelectorAll(".TechnologyUl > li ");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

$(document).ready(function () {
  $(".slider1,.slider2,.slider3,.slider4").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 600,
    touchMove: false,
    swipeToSlide: false,
    cssEase: "linear",
    fade: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

TechnologyUl.forEach((it) => {
  const text = it.querySelector(".text");
  text.addEventListener("click", () => {
    it.classList.toggle("active");
  });
});

$(document).ready(function () {
  $(".Designslid ").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    touchMove: false,
    swipeToSlide: false,
    cssEase: "linear",
    fade: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $(".textSlide").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    touchMove: false,
    swipeToSlide: false,
    cssEase: "linear",
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

$(".moreSlide").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
