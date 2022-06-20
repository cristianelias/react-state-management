import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header``;

const Nav = ({}) => {
  return (
    <Header>
      <StyledNav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledNav>
    </Header>
  );
};

export default Nav;
