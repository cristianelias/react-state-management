import styled from "@emotion/styled";
import React, { useState } from "react";
import RenderToast from "../components/RenderToast";
import Container from "./styled/Container";
import Button from "./styled/Button";

const Value = styled.span`
  color: #4ffb7b;
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);
  return (
    <Container>
      <RenderToast />
      <Value>{counter}</Value>
      <Button onClick={increaseCounter}>⬆️</Button>
      <Button onClick={decreaseCounter}>⬇️</Button>
      <Button onClick={resetCounter}>0️⃣</Button>
    </Container>
  );
};

export default Counter;
