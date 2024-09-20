//top

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

//design
// $(".fade").slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: "linear",
//   autoplay: true,
//   autoplaySpeed: 1000,
// });
