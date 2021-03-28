import React, { useState, useEffect } from "react";
import Button from "../styledComponents/Button";
import styled from "styled-components";

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: auto;

  gap: 30px;
`;

const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: auto;

  gap: 30px;
`;

const Timer = () => {
  const [miliseconds, setMiliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mins, setMins] = useState(0);
  const [hrs, setHrs] = useState(0);

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMiliseconds(0);
    setMins(0);
    setHrs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      // console.log("running");
      interval = setInterval(() => {
        setMiliseconds((miliseconds) => miliseconds + 1);
        if (miliseconds === 99) {
          clearInterval(interval);
          setMiliseconds(0);
          setSeconds((seconds) => seconds + 1);
        }
        if (seconds === 60) {
          clearInterval(interval);
          setMiliseconds(0);
          setSeconds(0);
          setMins((mins) => mins + 1);
        }
        if (mins === 60) {
          clearInterval(interval);
          setMiliseconds(0);
          setSeconds(0);
          setMins(0);
          setHrs((hrs) => hrs + 1);
        }
      }, 10);
    } else if (!isActive) {
      clearInterval(interval);
      // console.log(seconds, hrs, mins, miliseconds);
      // console.log("stopped");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, miliseconds, mins, hrs]);

  return (
    <div>
      <h1>Hi, I'm Stopwatch!</h1>

      <TimeContainer>
        <h1>{hrs < 10 ? `0${hrs}` : hrs} hr</h1>

        <h1>{mins < 10 ? `0${mins}` : mins} mins</h1>

        <h1>{seconds < 10 ? `0${seconds}` : seconds} s</h1>

        <h1>{miliseconds < 10 ? `0${miliseconds}` : miliseconds} ms</h1>
      </TimeContainer>

      <BtnContainer>
        <Button label={isActive ? "Stop" : "Start"} onClick={toggle} />
        <Button label="Reset" onClick={reset} />
      </BtnContainer>
    </div>
  );
};

export default Timer;
