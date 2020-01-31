import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  background-color: white;
  border: 1px solid #d0382b;
  color: #5c5c5c;
  font-family: Lato-Regular;
  width: 50px;
  padding: 10px 5px;
`;

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

export default Label;
