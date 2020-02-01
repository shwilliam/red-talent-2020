import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0 15px;
  text-align: center;
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Header;
