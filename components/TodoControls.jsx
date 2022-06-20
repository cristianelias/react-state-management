import styled from "@emotion/styled";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import RenderToast from "./RenderToast";
import Container from "./styled/Container";

const todosInitialState = [
  {
    id: uuid(),
    text: "Understand React state management",
    done: true,
  },
];

const TodoControls = ({}) => {
  const [todos, setTodos] = useState(todosInitialState);

  return (
    <Container>
      <RenderToast />
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </Container>
  );
};

export default TodoControls;
