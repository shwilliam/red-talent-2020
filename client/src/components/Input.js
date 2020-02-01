import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  clip: rect(1px 1px 1px 1px); /* IE 6/7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

const Input = ({ ...props }) => <StyledInput {...props} />;

export default Input;
