import styled from "@emotion/styled";

const Button = styled.button`
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: inherit;
  color: white;
  border: none;
  font-weight: 800;
  font-size: 20px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.3);
  }
`;

export default Button;
