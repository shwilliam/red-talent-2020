import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #fff;
  display: inline-block;
  background: #d0382b;
  font-weight: ${p => (p.noBold ? '400' : '600')};
  border-radius: 4px;
  text-decoration: none;
  padding: ${p => (p.small ? '0.3rem 0.8rem' : '0.8rem 2rem')};
  text-align: center;
  margin-top: ${p => (p.padded ? '2rem' : '0')};
`

const Button = ({to, children, small, padded, noBold}) => (
  <StyledLink href={to} small={small} padded={padded} noBold={noBold}>
    {children}
  </StyledLink>
)

export default Button
