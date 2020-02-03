import React from 'react'
import styled from 'styled-components'
import {Modal, useModal} from 'react-modal-wrap'
import {IoIosArrowBack} from 'react-icons/io'

const BigTextButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  font: inherit;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 1rem 1rem 0;

  @media only screen and (min-width: 400px) {
    padding: 1rem;
  }
`

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
              <BigTextButton onClick={close}>
                <IoIosArrowBack />
              </BigTextButton>
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

export default ProfileModal
