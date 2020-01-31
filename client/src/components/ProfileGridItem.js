import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: min-content;
`;

const ProfileGridItem = ({ children }) => <StyledLi>{children}</StyledLi>;

export default ProfileGridItem;
