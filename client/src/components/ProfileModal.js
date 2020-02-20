import React from 'react'
import styled from 'styled-components'
import {Modal, useModal} from 'react-modal-wrap'
import {IoMdClose, IoLogoLinkedin} from 'react-icons/io'

const BigTextButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  font: inherit;
  font-size: 2.5rem;
  opacity: 0.8;
  cursor: pointer;
  padding: 1rem 1rem 1rem 0;

  &:hover {
    opacity: 1;
  }

  @media only screen and (min-width: 400px) {
    padding: 1rem;
  }
`

const LinkedInLogo = styled(IoLogoLinkedin)`
  color: #555;
  font-size: 2.8rem;
`

const ModalContent = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: 1rem 1rem 4rem 1rem;
  background-color: #fff;
  border-radius: 15px;
  height: 100vh;
  overflow-y: scroll;
  z-index: 999;

  @media only screen and (min-width: 800px) {
    border-radius: 5px;
    padding-bottom: 2rem;
    height: unset;
    max-height: calc(100vh - 6rem);
    max-width: 850px;
  }
`

const ModalFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
`

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media only screen and (min-width: 800px) {
    padding: 1rem;
    top: 20%;
  }
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
  display: flex;
  justify-content: flex-end;
`

const ModalImg = styled.img`
  height: 100%;
  max-height: 400px;
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.33);

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
    font-size: 22px;
    text-align: left;
  }
`

const ModalTitleLarge = styled(ModalTitle)`
  font-size: 24px;
  font-weight: 700;
  color: #555;
  margin-top: 1.5rem;

  @media only screen and (min-width: 800px) {
    font-size: 28px;
  }
`

const ModalLayout = styled.div`
  margin-top: 2rem;

  @media only screen and (min-width: 800px) {
    padding: 1rem 2rem 2rem 2rem;
    margin-top: 0;
    display: flex;
    justify-content: center;
  }
`

const ModalTextContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  flex-basis: 70%;
  line-height: 1.25;
  padding-bottom: 0.5rem;

  @media only screen and (min-width: 400px) {
    padding: 0 1rem 2rem 1rem;
  }

  @media only screen and (min-width: 800px) {
    width: 100%;
    margin: 0 2rem 2rem 2rem;
    position: relative;
    top: -1rem;
  }
`

const ModalParagraph = styled.p`
  color: grey;

  @media only screen and (min-width: 800px) {
    margin-top: 1rem;
  }
`

const ProfileModal = ({id, name, imgURL, dep, desc}) => {
  const {isOpen, close} = useModal()

  return (
    <>
      {isOpen && (
        <ModalOverlay
          onClick={close}
          style={{
            height: `calc(${
              typeof window !== 'undefined' ? window.scrollY : 100
            }px + 100%`,
          }}
        />
      )}
      <Modal overlay>
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <BigTextButton onClick={close}>
                <IoMdClose />
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
                <ModalFooter>
                  <a
                    href={`https://www.linkedin.com/in/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInLogo />
                  </a>
                </ModalFooter>
              </ModalTextContainer>
            </ModalLayout>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default ProfileModal
