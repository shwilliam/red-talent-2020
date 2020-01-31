import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  height: 46px;
  padding: 15px 0;
`;

const GraduatesLabel = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default GraduatesLabel;
