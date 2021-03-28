import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: #fd879a;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 22px;

  &:hover {
    background-color: #fc5873;
  }

  &:active {
    transform: translateY(5px);
  }
`;

const Button = ({ label, onClick, width = "200px", color }) => {
  return (
    <Btn style={{ width: width, backgroundColor: color }} onClick={onClick}>
      {label}
    </Btn>
  );
};

export default Button;
