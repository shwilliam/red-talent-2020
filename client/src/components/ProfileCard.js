import React from 'react'
import styled from 'styled-components'
import {ModalWrapper, useModal} from 'react-modal-wrap'
import {ProfileModal, TextButton} from './index'
import {IoLogoLinkedin} from 'react-icons/io'

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
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 2;
  position: relative;

  @media only screen and (min-width: 700px) {
    width: 250px;
  }
`

const Container = styled.div`
  position: absolute;
  top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 700px) {
    padding: 0 20px;
  }
`

const StyledP = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: #555555;
  margin: 0;
  width: 65%;
  line-height: 1.2;

  @media only screen and (min-width: 700px) {
    font-size: 1rem;
    width: 100%;
  }
`

const StyledDep = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: #5c5c5c;
  margin: 0;
  width: 65%;
  padding-top: 5px;
  z-index: -999;

  @media only screen and (min-width: 700px) {
    font-size: 1rem;
  }
`

const StyledImg = styled.img`
  width: 155px;
  height: 50%;
  border-radius: 6px 6px 0 0;
  object-fit: cover;
  z-index: -999;

  @media only screen and (min-width: 700px) {
    width: 250px;
    height: 220px;
  }
`

const LinkedInLogo = styled(IoLogoLinkedin)`
  color: #555;
  font-size: 2.4rem;
  border-radius: 5px;
  @media only screen and (min-width: 700px) {
    font-size: 2.6rem;
  }
`

const LinkedInLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
`

const ProfileCard = ({id, name, desc, imgUrl, dep}) => (
  <ModalWrapper>
    <ModalOpenButton>
      <StyledDiv>
        <Container>
          <StyledP>{name}</StyledP>
          <StyledDep>{dep}</StyledDep>
        </Container>
        <LinkedInLink
          href={`https://www.linkedin.com/in/${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogo />
        </LinkedInLink>
      </StyledDiv>
      <StyledImg src={imgUrl} />
    </ModalOpenButton>

    <ProfileModal
      name={name}
      imgURL={imgUrl}
      dep={dep.map(d => DEPS[d]).join(', ')}
      desc={desc}
      id={id}
    />
  </ModalWrapper>
)

export default ProfileCard
