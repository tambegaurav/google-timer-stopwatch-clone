import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../styledComponents/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  height: 40px;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  outline: none;
  border: none;
  border-bottom: 5px solid pink;
  color: #012e75;
`;

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // console.log("Started timer");
    let interval = null;
    if (active) {
      let start = seconds;

      interval = setInterval(() => {
        setTimer(start);
        start--;

        if (start === -1) {
          clearInterval(interval);
          setActive(!active);
        }
      }, 1000);
    } else if (!active) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
      //   console.log("stopped timer");
    };
  }, [active]);

  return (
    <Container>
      <h1>Hey, I'm Timer!</h1>
      <Input
        placeholder="Enter time in seconds"
        type="number"
        onChange={(e) => setSeconds(e.target.value)}
      />
      <Button
        label={!active ? "Start" : "Stop"}
        onClick={() => setActive(!active)}
      />
      {timer && active && <h1>{timer} seconds</h1>}

      {timer === 0 && <h1>Time's up!</h1>}
    </Container>
  );
};

export default Timer;
