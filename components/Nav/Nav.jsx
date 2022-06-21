import styled from "@emotion/styled";
import React from "react";
import LinkTo from "../LinkTo/LinkTo";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #8be9fd;
  color: #282a36;
`;

const Header = styled.header``;

const Nav = ({}) => {
  return (
    <Header>
      <StyledNav>
        <LinkTo path="/" text="Components passed as children props" />
        <LinkTo
          path="/nested"
          text="Components importing and rendering other components"
        />
      </StyledNav>
    </Header>
  );
};

export default Nav;
