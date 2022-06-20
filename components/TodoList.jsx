import styled from "@emotion/styled";
import React from "react";
import RenderToast from "./RenderToast";
import Todo from "./Todo";
import Container from "./styled/Container";

const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  width: 100%;
`;

const Title = styled.h1`
  color: #4ffb7b;
`;

const TodoList = ({ todos, setTodos }) => {
  const toggleTodoStatus = ({ id, text, done }) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { id, text, done: !done } : todo))
    );
  };

  const deleteTodo = (targetId) => {
    setTodos(todos.filter(({ id }) => id !== targetId));
  };

  return (
    <Container>
      <RenderToast />
      <Title>Todo list</Title>
      <StyledList>
        {todos.map(({ id, text, done }, index) => (
          <ListItem key={id}>
            <Todo
              text={text}
              done={done}
              id={id}
              index={index + 1}
              toggleTodoStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
            />
          </ListItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default TodoList;
