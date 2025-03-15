import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  border: 1px solid grey;
  width: 100%;
  display: block;
`;
