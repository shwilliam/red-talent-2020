import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const BorderedContainer = styled.section`
  border: 1px solid #d0382b;
  background: #fff;
  color: #000;
  margin: 2rem auto;
  padding: 1rem 0;
  width: 90%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  padding-top: 0.5rem;
  margin: 0 auto;
`

const StyledButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
`

const Content = styled.section`
  padding: 1rem;
  display: flex;
  width: 80%;
  margin: 1rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Dep = styled.h3`
  font-size: 0.9rem;
  font-weight: 100;
  text-transform: uppercase;
`

const Collapsible = ({ Icon, dep, children }) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  return (
    <BorderedContainer>
      <Header>
        <Icon />
        <Dep>{dep}</Dep>
        <StyledButton onClick={handleToggle}>
          {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </StyledButton>
      </Header>
      {toggle ? (
        <Content>
          {children}
          <Button to='/'>Learn More</Button>
        </Content>
      ) : null}
    </BorderedContainer>
  )
}

export default Collapsible
