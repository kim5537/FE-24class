import env from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&units=metric`;

  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);
      const icon = document.querySelector(".icon");
      const temp = document.querySelector(".temp");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");

      let weatherName;
      switch (data.weather[0].main) {
        case "Clouds":
          weatherName = "구름";
          break;
        case "Rain":
          weatherName = "비";
          break;
        case "Mist":
          weatherName = "안개";
          break;
      }
      let cityName;

      switch (data.name) {
        case "Jamwon-dong":
          cityName = "잠원동";
          break;
        case "Rain":
          cityName = "비";
          break;
      }

      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.innerText = `${data.main.temp} ºC`;
      city.innerText = cityName;
      weather.innerText = weatherName;
    });
};

const getPosition = (position) => {
  console.log(position.coords);
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

const errorHandler = (err) => {
  const noti = document.querySelector(".noti");
  noti.style.display = "block";
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation is not Available!");
}
