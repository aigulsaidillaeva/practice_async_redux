import React from "react";
import styled, { css } from "styled-components";

const BUTTON_VARIANTS = {
  danger: {
    bg: "green",
    hover: "green",
  },
  primary: {
    bg: "red",
    hover: "red",
  },
};

function getButtonVariant(props) {
  return css`
    background-color: ${BUTTON_VARIANTS[props.variant].bg};
    &:hover {
      background-color: ${BUTTON_VARIANTS[props.variant].hover};
    }
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
  `;
}

export const Button = (props) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};
const StyledButton = styled.button`
  ${getButtonVariant}
`;
