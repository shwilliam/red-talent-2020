import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: #5c5c5c;
  font-family: Lato-Regular;
  text-align: left;
`;

const Paragraph = ({ children }) => <StyledP>{children}</StyledP>;

export default Paragraph;
