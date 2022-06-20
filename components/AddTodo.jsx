import styled from "@emotion/styled";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import RenderToast from "./RenderToast";
import Button from "./styled/Button";
import Input from "./styled/Input";
import Container from "./styled/Container";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: #4ffb7b;
`;

const StyledContainer = styled(Container)`
  width: 100%;
`;

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
    <StyledContainer>
      <RenderToast />

      <Title>Add todo</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          createNewTodo();
        }}
      >
        <Input
          type="text"
          value={draftTodo}
          onChange={({ target }) => setDraftTodo(target.value)}
        />
        <Button>Add todo</Button>
      </Form>
    </StyledContainer>
  );
};

export default AddTodo;
