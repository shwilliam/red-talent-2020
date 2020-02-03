import React from 'react'
import styled from 'styled-components'
import {Modal, ModalWrapper, useModal} from 'react-modal-wrap'

const DEPS = {
  mar: 'Marketer',
  dev: 'Developer',
  des: 'Designer',
}

const TextButton = styled.button`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
`

const BigTextButton = styled(TextButton)`
  padding: 1rem 1rem 1rem 0;
  font-size: 2rem;

  @media only screen and (min-width: 400px) {
    padding: 1rem;
  }
`

const ModalOpenButton = ({children}) => {
  const {open} = useModal()

  return <TextButton onClick={open}>{children}</TextButton>
}

const ModalContent = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: 1rem 1rem 4rem 1rem;
  background-color: #fff;
  max-height: calc(100vh - 2rem);
  max-width: 750px;
  overflow-y: scroll;

  @media only screen and (min-width: 500px) {
    padding-bottom: 2rem;
    margin-top: 2rem;
    max-height: calc(100vh - 6rem);
  }
`

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
`

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000080;
`

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`

const ModalImg = styled.img`
  height: 100%;
  max-height: 400px;
  width: 100%;
  max-width: 300px;
  object-fit: contain;

  @media only screen and (min-width: 800px) {
    position: sticky;
    top: 4rem;
  }
`

const ModalImgContainer = styled.div`
  position: relative;
  flex-basis: 50%;
  text-align: center;
`

const ModalTitle = styled.p`
  color: grey;
  text-align: center;
  font-weight: 300;
  margin: 1rem 0;

  @media only screen and (min-width: 800px) {
    text-align: left;
  }
`

const ModalTitleLarge = styled(ModalTitle)`
  margin-top: 1.5rem;

  @media only screen and (min-width: 800px) {
    font-weight: 700;
  }
`

const ModalLayout = styled.div`
  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
  }
`

const ModalTextContainer = styled.div`
  flex-basis: 50%;
  line-height: 1.25;
  padding-bottom: 0.5rem;

  @media only screen and (min-width: 400px) {
    padding: 0 1rem 2rem 1rem;
  }

  @media only screen and (min-width: 800px) {
    margin: 0 2rem 2rem 2rem;
    position: relative;
    top: -1rem;
  }
`

const ModalParagraph = styled.p`
  color: grey;

  @media only screen and (min-width: 800px) {
    margin-top: 3rem;
  }
`

const ProfileModal = ({name, imgURL, dep, desc}) => {
  const {isOpen, close} = useModal()

  return (
    <>
      {isOpen && <ModalOverlay onClick={close} />}
      <Modal overlay>
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <BigTextButton onClick={close}>❮</BigTextButton>
            </ModalHeader>

            <ModalLayout>
              <ModalImgContainer>
                <ModalImg src={imgURL} />
              </ModalImgContainer>

              <ModalTextContainer>
                <ModalTitleLarge>{name}</ModalTitleLarge>
                <ModalTitle>{dep}</ModalTitle>
                <ModalParagraph>{desc}</ModalParagraph>
              </ModalTextContainer>
            </ModalLayout>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
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
