import React, { useState } from "react";
import RenderToast from "../RenderToast";
import Container from "../styled/Container";
import Button from "../styled/Button";
import Identity from "../styled/Identity";
import CounterContainer from "../styled/CounterContainer";
import CounterValue from "../styled/CounterValue";
import useCounter from "../hooks/useCounter";

const BabyKangaroo = ({ name }) => {
  const { counter, increaseCounter, decreaseCounter } = useCounter();

  return (
    <Container>
      <RenderToast />
      <Identity>🦘 {name}</Identity>
      <CounterContainer>
        <Button onClick={increaseCounter}>⬆️</Button>
        <CounterValue>{counter}</CounterValue>
        <Button onClick={decreaseCounter}>⬇️</Button>
      </CounterContainer>
    </Container>
  );
};

export default BabyKangaroo;
