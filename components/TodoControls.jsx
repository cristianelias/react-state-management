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

const TodoControls = ({}) => {
  const [todos, setTodos] = useState(todosInitialState);

  return (
    <div>
      <RenderToast />
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />{" "}
    </div>
  );
};

export default TodoControls;
