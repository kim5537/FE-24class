import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a{
    color: inherit;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://png.pngtree.com/thumb_back/fw800/background/20230426/pngtree-some-clouds-are-shown-in-a-blue-sky-image_2514945.jpg")
    center/cover no-repeat; */
  background: #000 ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

//환경변수 파일 가져오기.
//  const API_KEY = process.env.REACT_API_KEY; // react 방법
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY; //vite 방법
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [wearther, setWeather] = useState(null);
  const [city, setCity] = useState("");
  let [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "toKyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    //동시출발하면 안된다. --> api를 가져올땐 데이터를 가져오길 기다려줘야한다.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
    const response = await fetch(url); //함수
    const data = await response.json();
    // console.log(data);
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    //포지션에 대한 위치값을 가진 윈도우함수
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon); // 함수가 너무 길어져서 리팩토링
    });
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      setLoading(true);
      const response = await fetch(url); //함수
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") setCity(null);
    else setCity(city);
  };

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((respons) => respons.json())
      .then(({ urls: { full } }) => {
        setBackground(full);
      }); //이렇게 쓰는 경우가 많지만 두가지 방법을 보여준다. //중첩구조분해할당
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBackground();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <GlobalStyle />
      <Wrapper img={background}>
        <Contents>
          <ClipLoader color="#6b91f8" loading={loading} size={150} />
          <WeatherBox wearther={wearther} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
