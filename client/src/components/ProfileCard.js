import React from 'react'
import styled from 'styled-components'
import {ModalWrapper, useModal} from 'react-modal-wrap'
import {ProfileModal, TextButton} from './index'

const DEPS = {
  mar: 'Marketer',
  dev: 'Developer',
  des: 'Designer',
}

const ModalOpenButton = ({children}) => {
  const {open} = useModal()

  return <TextButton onClick={open}>{children}</TextButton>
}

const StyledDiv = styled.div`
  width: 155px;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 2;

  @media only screen and (min-width: 700px) {
    width: 250px;
    height: 80px;
  }
`

const StyledP = styled.p`
  font-weight: 700;
  color: #555555;
  margin: 0;
`

const StyledImg = styled.img`
  width: 155px;
  height: 196px;
  border-radius: 6px 6px 0 0;
  object-fit: cover;

  @media only screen and (min-width: 700px) {
    width: 100%;
    height: 220px;
  }
`

const ProfileCard = ({name, desc, imgUrl, dep}) => (
  <ModalWrapper>
    <ModalOpenButton>
      <StyledDiv>
        <StyledP>{name}</StyledP>
        <StyledP>{dep}</StyledP>
      </StyledDiv>
      <StyledImg src={imgUrl} />
    </ModalOpenButton>

    <ProfileModal
      name={name}
      imgURL={imgUrl}
      dep={dep.map(d => DEPS[d]).join(', ')}
      desc={desc}
    />
  </ModalWrapper>
)

export default ProfileCard
