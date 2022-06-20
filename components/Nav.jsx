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
  height: 80px;
  background-color: #8be9fd;
  color: #282a36;
`;

const Header = styled.header``;

const Nav = ({}) => {
  return (
    <Header>
      <StyledNav>
        <Link href="/">
          <a>Components passed as children props</a>
        </Link>
      </StyledNav>
    </Header>
  );
};

export default Nav;
