import React from "react";
import RenderToast from "./RenderToast";

const Todo = ({ id, text, done, toggleTodoStatus }) => {
  return (
    <div>
      <RenderToast />

      <span>
        {text} - {`Status: ${done ? "Done" : "Pending"}`}
      </span>
      <button onClick={() => toggleTodoStatus({ id, text, done })}>
        {done ? "Mark as pending" : "Mark as done"}
      </button>
    </div>
  );
};

export default Todo;
