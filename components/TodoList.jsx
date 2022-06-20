import React from "react";
import RenderToast from "./RenderToast";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const toggleTodoStatus = ({ id, text, done }) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { id, text, done: !done } : todo))
    );
  };

  return (
    <div>
      <RenderToast />
      <h1>List of todos</h1>
      {todos.map(({ id, text, done }, index) => (
        <li key={id}>
          {index + 1}
          <Todo
            text={text}
            done={done}
            id={id}
            toggleTodoStatus={toggleTodoStatus}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
