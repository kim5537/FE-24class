import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 14px;
  background: rgba(240, 255, 255, 0.6);
  padding: 50px;
  border: 3px solid #fff;
  border-radius: 28px;
`;

const City = styled.h1`
  font-size: 22px;
`;

const Weather = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

const Desc = styled.h3`
  font-size: 26px;
`;

const WeatherBox = ({ wearther }) => {
  //초기값 null 때문에 null값을 바로 가져온다. 단란회로 필요.
  let cityName;
  let weatherName;

  switch (wearther?.name) {
    case "Jamwon-dong":
      cityName = "서울시 잠원동";
      break;
    case "Paris":
      cityName = "프랑스 파리";
      break;
    case "New York":
      cityName = "미국 뉴욕";
      break;
    case "Tokyo":
      cityName = "일본 도쿄";
      break;
    case "Seoul":
      cityName = "대한민국 서울";
      break;
  }

  switch (wearther?.weather[0]?.main) {
    case "Clear":
      weatherName = "쾌청";
      break;
    case "Clouds":
      weatherName = "구름";
      break;
    case "Mist":
      weatherName = "안개";
      break;
    case "Rain":
      weatherName = "비";
      break;
  }
  return (
    <Wrapper>
      <City>🌇도시 :{cityName} </City>
      <Weather>
        온도 : {wearther && wearther?.main.temp}℃ | 습도 :
        {wearther && wearther?.main.humidity}%
      </Weather>
      <Desc>현재 날씨: {weatherName}</Desc>
    </Wrapper>
  );
};

export default WeatherBox;
