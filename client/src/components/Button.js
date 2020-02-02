import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #fff;
  display: inline-block;
  background: #d0382b;
  font-weight: 600;
  text-decoration: none;
  padding: 0.8rem 2rem;
  text-align: center;
`

const Button = ({ to, children }) => (
  <StyledLink href={to}>{children}</StyledLink>
)

export default Button
