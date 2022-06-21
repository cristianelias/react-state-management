import React, { useState } from "react";
import RenderToast from "../components/RenderToast";
import Container from "./styled/Container";
import Pouch from "./styled/Pouch";
import Button from "./styled/Button";
import Identity from "./styled/Identity";
import CounterContainer from "./styled/CounterContainer";
import CounterValue from "./styled/CounterValue";
import useCounter from "./hooks/useCounter";

const Parent = ({ children, id }) => {
  const { counter, increaseCounter, decreaseCounter } = useCounter();

  return (
    <Container>
      <RenderToast />
      <Identity>{id}</Identity>
      <CounterContainer>
        <Button onClick={increaseCounter}>⬆️</Button>
        <CounterValue>{counter}</CounterValue>
        <Button onClick={decreaseCounter}>⬇️</Button>
      </CounterContainer>
      {children && <Pouch>{children}</Pouch>}
    </Container>
  );
};;

export default Parent;
