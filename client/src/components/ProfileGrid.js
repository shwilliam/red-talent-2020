import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 0;
`;

const ProfileGrid = ({ children }) => <StyledUl>{children}</StyledUl>;

export default ProfileGrid;
