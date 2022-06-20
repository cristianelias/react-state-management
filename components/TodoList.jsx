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
      <h1>Todos</h1>
      {todos.map(({ id, text, done }, index) => (
        <li key={id}>
          <Todo
            text={text}
            done={done}
            id={id}
            index={index + 1}
            toggleTodoStatus={toggleTodoStatus}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
