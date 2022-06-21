import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import RenderToast from "./RenderToast";
import Button from "./styled/Button";

const textDoneRules = css`
  color: #8be9fd;
  text-decoration: line-through;
`;

const textPendingStyles = css`
  color: #fe79c6;
  text-decoration: none;
`;

const Text = styled.span`
  ${({ done }) => (done ? textDoneRules : textPendingStyles)};
`;

const Status = styled.span`
  color: #f2fa8c;
  text-decoration: none;
`;

const Separator = styled.span`
  color: #4ffb7b;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const Todo = ({ id, text, done, toggleTodoStatus, deleteTodo }) => {
  return (
    <Wrapper>
      <RenderToast />
      <span>
        <Status>{`[ ${done ? "✅" : "⏳"} ]`}</Status>
        <Separator>{" - "}</Separator>
        <Text done={done}>{text}</Text>
      </span>
      <ButtonsContainer>
        <Button onClick={() => toggleTodoStatus({ id, text, done })}>
          Toggle
        </Button>
        <Button onClick={() => deleteTodo(id)}>Delete</Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Todo;
