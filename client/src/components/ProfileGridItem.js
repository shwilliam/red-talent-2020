import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: min-content;
  border-radius: 6px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.33);
`;

const ProfileGridItem = ({ children }) => <StyledLi>{children}</StyledLi>;

export default ProfileGridItem;
