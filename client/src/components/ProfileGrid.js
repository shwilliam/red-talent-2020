import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1.75rem;
  justify-content: center;
  padding: 0;
`;

const ProfileGrid = ({ children }) => <StyledUl>{children}</StyledUl>;

export default ProfileGrid;
