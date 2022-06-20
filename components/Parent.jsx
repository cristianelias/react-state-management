import styled from "@emotion/styled";
import React, { useState } from "react";
import RenderToast from "../components/RenderToast";

const Container = styled.div`
  padding: 25px;
  background-color: #282a36;
  border: 5px solid #f2fa8c;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: #fe79c6;
`;

const Identity = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  color: #8be9fd;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
`;

const Button = styled.button`
  padding: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CounterValue = styled.div`
  color: #4ffb7b;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  flex-grow: 1;
`;

const Parent = ({ children, id }) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <Container>
      <RenderToast />
      <Identity>{id}</Identity>
      <CounterContainer>
        <Button onClick={increaseCounter}>⬆️</Button>
        <CounterValue>{counter}</CounterValue>
        <Button onClick={decreaseCounter}>⬇️</Button>
      </CounterContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Parent;
