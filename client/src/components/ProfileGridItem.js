import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
`;

const ProfileGridItem = ({ children }) => <StyledLi>{children}</StyledLi>;

export default ProfileGridItem;
