import React, { useEffect, useState } from 'react';
import { AppState } from '../state/reducers/rootReducer';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Timer = () => {
  const time: number = useSelector((state: AppState) => state.time);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal((Date.now() - time) / 1000);
  }, [time]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTotal((Date.now() - time) / 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [total, time]);

  const formatTime  = (sec: number): string => {
    const addZero = (num: number): string =>  num.toString().padStart(2, '0');

    const second: string = addZero(Math.floor((sec) % 60));
    const minute: string = addZero(Math.floor((sec / 60) % 60));
    const hour: string = addZero(Math.floor((sec / 60 / 60)));

    return `${hour}:${minute}:${second}`
  }


  return (
    <Container>
      <Text>Со времени открытия сайта прошло:</Text>
      <Time>{formatTime(total)}</Time>
    </Container>
  )
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 311px;
`;
const Text = styled.p`
  font-size: 25px;
  margin: 0;
`;
const Time = styled.p`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 0;
`;

export default Timer;