import styled from "@emotion/styled";
import React, { useState } from "react";
import RenderToast from "../RenderToast";
import Container from "../styled/Container";
import Pouch from "../styled/Pouch";
import Button from "../styled/Button";
import Identity from "../styled/Identity";
import CounterContainer from "../styled/CounterContainer";
import CounterValue from "../styled/CounterValue";
import useCounter from "../hooks/useCounter";
import Input from "../styled/Input";

const StyledInput = styled(Input)`
  width: 50%;
`;

const onEnter = ({ key, target }, doWithValue) => {
  const val = target.value;
  if (key === "Enter" && val) {
    doWithValue(val);
    target.value = "";
  }
};

const Kangaroo = ({ children, name, adoptABaby, changeName }) => {
  const { counter, increaseCounter, decreaseCounter } = useCounter();
  const [prevChildren, setPrevChildren] = useState(children);

  if (prevChildren !== children) {
    setPrevChildren(children);
  }

  const adopt = (e) => onEnter(e, (value) => adoptABaby(value));
  const rename = (e) => onEnter(e, (value) => changeName(value));

  debugger;

  return (
    <Container>
      <RenderToast />
      <Identity>🦘 {name}</Identity>
      <CounterContainer>
        <Button onClick={increaseCounter}>⬆️</Button>
        <CounterValue>{counter}</CounterValue>
        <Button onClick={decreaseCounter}>⬇️</Button>
      </CounterContainer>
      <StyledInput
        type="text"
        placeholder="Ingresar nombre del bebé a adoptar..."
        onKeyDown={adopt}
      />
      <StyledInput
        type="text"
        placeholder="Cambia de nombre..."
        onKeyDown={rename}
      />
      {children && <Pouch>{children}</Pouch>}
    </Container>
  );
};

export default Kangaroo;
