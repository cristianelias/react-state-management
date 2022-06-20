import React, { useState } from "react";
import RenderToast from "../RenderToast";
import Container from "../styled/Container";
import Pouch from "../styled/Pouch";
import Button from "../styled/Button";
import Identity from "../styled/Identity";
import CounterContainer from "../styled/CounterContainer";
import CounterValue from "../styled/CounterValue";
import useCounter from "../hooks/useCounter";
import TodoControls from "../TodoControls";
import Turtle from "./Turtle";

const Bird = () => {
  const { counter, increaseCounter, decreaseCounter } = useCounter();

  return (
    <Container>
      <RenderToast />
      <Identity>🐦</Identity>
      <CounterContainer>
        <Button onClick={increaseCounter}>⬆️</Button>
        <CounterValue>{counter}</CounterValue>
        <Button onClick={decreaseCounter}>⬇️</Button>
      </CounterContainer>
      <Pouch>
        <TodoControls />
        <Turtle />
      </Pouch>
    </Container>
  );
};

export default Bird;
