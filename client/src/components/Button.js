import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #fff;
  background: #d0382b;
  text-decoration: none;
  padding: 0.8rem 2rem;
  font-family: Lato-Regular;
  text-align: center;
`

const Button = ({ to, children }) => (
  <StyledLink href={to}>{children}</StyledLink>
)

export default Button
