import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../style/theme";

const Wrapper = styled.div`
  width: 230px;
  height: 300px;
  padding: 10px;
  ${({ theme }) => theme.boxline}
  background: ${(props) => props.theme.opacityWhite};
`;

const Title = styled.div`
  text-align: center;
  line-height: 50px;
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.linecolor};
`;

const P = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.maincolor};
  text-align: center;
  word-break: keep-all;
`;

const TimerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Timer = styled.div`
  margin-top: 6px;
  width: 162px;
  height: 162px;
  border: 2px solid ${({ theme }) => theme.linecolor};
  border-radius: 50%;
  position: relative;
`;

const Second = styled.div`
  ${({ theme }) => theme.timeLine}
  transform: translate(3px, -42%) rotate(${(props) => props.rotate});
  height: 30px;
  width: 1px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.linecolor};
  margin-top: -15px;
  transform-origin: center bottom;
`;

const Minute = styled.div`
  ${({ theme }) => theme.timeLine}
  transform: translate(100%, -50%) rotate(${(props) => props.rotate});
  height: 70px;
  width: 2px;
  background-color: ${({ theme }) => theme.maincolor};
  border-radius: 2px;
  margin-top: -31px;
  transform-origin: center bottom;
`;

const Hour = styled.div`
  height: 50px;
  width: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.linecolor};
  ${({ theme }) => theme.timeLine}
  transform: translate(100%, -50%) rotate(${(props) => props.rotate});
  margin-top: -22px;
  transform-origin: center bottom;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.linecolor};
  border-radius: 50px;
  ${({ theme }) => theme.timeLine}
`;

const TimeNum = styled.div`
  color: ${({ theme }) => theme.maincolor};
  font-size: 16px;
  font-weight: 500;
`;

const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  let hour = time.getHours();
  let minuete = time.getMinutes();
  let second = time.getSeconds();

  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minuete / 60) * 30;
  let minueteAngle = minuete * 6;
  let secondAngle = second * 6;

  let timeText = hour < 12 ? "오전" : "오후";
  let hourText = hour < 10 ? `0${hour}` : hour;
  let minueteText = minuete < 10 ? `0${minuete}` : minuete;
  let secondText = second < 10 ? `0${second}` : second;

  return (
    <Wrapper>
      <Title>현재 시간은?</Title>
      <P>*6AM-6PM을 기준으로 테마가 변경됩니다.</P>
      <TimerWrapper>
        <Timer>
          <Second rotate={`${secondAngle}deg`}></Second>
          <Minute rotate={`${minueteAngle}deg`}></Minute>
          <Hour rotate={`${hourAngle}deg`}></Hour>
          <Dot></Dot>
        </Timer>
        <TimeNum>
          {`${timeText} ${hourText} : ${minueteText} :${secondText}`}
        </TimeNum>
      </TimerWrapper>
    </Wrapper>
  );
};

export default React.memo(Time);
