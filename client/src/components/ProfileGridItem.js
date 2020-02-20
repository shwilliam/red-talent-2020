import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  height: 300px;
  width: 156px;
  list-style: none;
  border-radius: 6px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.33);
  @media only screen and (min-width: 700px) {
    width: 250px;
    height: 360px;
  }
`

const ProfileGridItem = ({children}) => (
  <StyledLi>{children}</StyledLi>
)

export default ProfileGridItem
