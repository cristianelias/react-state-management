import styled from "@emotion/styled";
import React from "react";

const Toast = styled.div`
  visibility: hidden;
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, 0);
  font-size: 18px;
  padding: 8px;
  border-radius: 6px;
  width: 150px;

  @keyframes spooky {
    0% {
      visibility: visible;
    }
    50% {
      top: -5px;
    }
    99% {
      top: -10px;
    }
    100% {
      visibility: hidden;
    }
  }
  animation: spooky 1s linear forwards;
`;

const RenderToast = () => <Toast key={Math.random()}>🔥 Render 🔥</Toast>;

export default RenderToast;
