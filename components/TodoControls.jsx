import styled from "@emotion/styled";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import RenderToast from "./RenderToast";

const todosInitialState = [
  {
    id: uuid(),
    text: "Understand React state",
    done: true,
  },
];

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

const TodoControls = ({}) => {
  const [todos, setTodos] = useState(todosInitialState);

  return (
    <Container>
      <RenderToast />
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />{" "}
    </Container>
  );
};

export default TodoControls;
