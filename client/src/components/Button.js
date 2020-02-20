import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: ${p => (p.noFill ? '#d0382b' : '#fff')};
  display: inline-block;
  background: ${p => (p.noFill ? 'transparent' : '#d0382b')};
  font-weight: ${p => (p.noBold ? '400' : '600')};
  border: 2px solid #d0382b;
  border-radius: 4px;
  text-decoration: none;
  padding: ${p => (p.small ? '0.3rem 0.8rem' : '0.8rem 2rem')};
  text-align: center;
  margin-top: ${p => (p.padded ? '2rem' : '0')};
`

const Button = ({to, children, small, padded, noBold, noFill}) => (
  <StyledLink
    href={to}
    small={small}
    padded={padded}
    noBold={noBold}
    noFill={noFill}
  >
    {children}
  </StyledLink>
)

export default Button
