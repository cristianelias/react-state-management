import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const StyledLink = styled.a`
  font-weight: ${({ isActive }) => (isActive ? 800 : 400)};
  cursor: pointer;
`;

const LinkTo = ({ path, text }) => {
  const { pathname } = useRouter();

  return (
    <Link href={path}>
      <StyledLink isActive={pathname == path}>[ {text} ]</StyledLink>
    </Link>
  );
};

export default LinkTo;
