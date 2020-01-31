import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const ProfileGrid = ({ children }) => <StyledUl>{children}</StyledUl>;

export default ProfileGrid;
