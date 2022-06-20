import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import RenderToast from "./RenderToast";

const AddTodo = ({ setTodos, todos }) => {
  const [draftTodo, setDraftTodo] = useState("");
  const createNewTodo = () =>
    setTodos([
      ...todos,
      {
        id: uuid(),
        done: false,
        text: draftTodo,
      },
    ]);

  return (
    <div>
      <RenderToast />

      <h1>Add a todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createNewTodo();
        }}
      >
        <input
          type="text"
          value={draftTodo}
          onChange={({ target }) => setDraftTodo(target.value)}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
