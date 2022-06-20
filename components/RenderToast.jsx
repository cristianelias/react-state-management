import styled from "@emotion/styled";
import React from "react";

const Toast = styled.div`
  @keyframes spooky {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(-4px);
    }
    100% {
      opacity: 0;
      transform: translateY(-8px);
    }
  }
  animation: spooky 0.8s linear forwards;
`;

const RenderToast = () => <Toast key={Math.random()}>🔥 Render 🔥</Toast>;

export default RenderToast;
