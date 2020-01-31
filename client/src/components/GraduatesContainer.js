import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
`;

const GraduatesContainer = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default GraduatesContainer;
