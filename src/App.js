import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Timer from "./Timer/Timer";
import Stopwatch from "./Stopwatch/Stopwatch";
import Button from "./styledComponents/Button";

const Container = styled.div`
  width: 90%;
  height: 85vh;
  background-color: #0651c9;
  margin: auto;
  padding-top: 20px;
  margin-top: 30px;
  box-shadow: 5px 5px 15px black;
  border-radius: 15px;
  color: #fff;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  gap: 5px;
`;

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="App">
      <Container>
        <h1 style={{ textDecoration: "underline" }}>Timer/Stopwatch</h1>
        <BtnContainer>
          <Button
            width="50%"
            label="Timer"
            onClick={() => setActive(0)}
            color={active === 0 ? "#012e75" : "#0651c9"}
          />
          <Button
            width="50%"
            label="Stopwatch"
            onClick={() => setActive(1)}
            color={active === 1 ? "#012e75" : "#0651c9"}
          />
        </BtnContainer>

        {active === 0 && <Timer />}
        {active === 1 && <Stopwatch />}
      </Container>
    </div>
  );
}

export default App;
