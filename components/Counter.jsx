import React, { useState } from "react";
import RenderToast from "../components/RenderToast";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);
  return (
    <div>
      <RenderToast />
      <p>Value: {counter}</p>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
};

export default Counter;
