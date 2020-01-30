import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, SubTitle } from './'

const BorderedContainer = styled.section`
  border: 1px solid #d0382b;
  background: #fff;
  padding: 1rem;
`

const Collapsible = ({ icon = 'blah', dep, children }) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  return (
    <BorderedContainer>
      <button onClick={handleToggle}>{toggle ? '+' : '-'}</button>
      <p>{icon}</p>
      <SubTitle>{dep}</SubTitle>
      {toggle ? null : (
        <>
          {children}
          <Button to='/'>Learn More</Button>
        </>
      )}
    </BorderedContainer>
  )
}

export default Collapsible
