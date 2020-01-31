import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  margin: 0 10px;
`;

const GraduatesContainer = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default GraduatesContainer;
