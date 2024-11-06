import React, { useEffect, useState } from "react";
import styled from "styled-components";
import weatherDescKo from "./weatherkr";

const Wrapper = styled.div`
  width: 230px;
  height: 153px;
  padding: 10px;
  ${({ theme }) => theme.boxline}
  background: ${(props) => props.theme.opacityWhite};
`;

const WeatherIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.linecolor};
`;

const Img = styled.img`
  filter: drop-shadow(0px 0px 2px ${(props) => props.theme.maincolor});
  width: 120%;
  height: 120%;
  object-fit: contain;
  object-position: 50% 80%;
`;

const WeatherText = styled.div`
  font-size: 0%.9;
  color: ${(props) => props.theme.maincolor};
  font-weight: 600;
  text-align: center;
`;

const API = process.env.REACT_APP_API_KEY;

const WeatherItem = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState(null);

  const getWeatherLocation = async (lat, lon) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setIcon(data.weather[0].icon);
    setLoading(false);
  };

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherLocation(lat, lon);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);
  console.log(weather);
  return (
    <Wrapper>
      <WeatherIcon>
        {weather !== null || undefined ? (
          <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        ) : (
          <>
            위치설정을 <br /> 승인 해주세요!
          </>
        )}
      </WeatherIcon>
      <WeatherText>
        {weather !== null || undefined
          ? weatherDescKo(weather.weather[0].id)
          : "날씨 데이터를 불러옵니다!"}
      </WeatherText>
    </Wrapper>
  );
};

export default React.memo(WeatherItem);
