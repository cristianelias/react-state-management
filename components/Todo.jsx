import styled from "@emotion/styled";
import React from "react";
import RenderToast from "./RenderToast";

const Text = styled.span`
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

const Todo = ({ id, text, done, toggleTodoStatus, index }) => {
  return (
    <>
      <RenderToast />

      <Text done={done}>
        {index} - {text} {`( ${done ? "Done" : "Pending"} )`}
      </Text>
      <button onClick={() => toggleTodoStatus({ id, text, done })}>
        {done ? "Mark as pending" : "Mark as done"}
      </button>
    </>
  );
};

export default Todo;
