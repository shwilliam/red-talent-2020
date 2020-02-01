import React from "react";
import styled from "styled-components";
import { Modal, ModalWrapper, useModal } from "react-modal-wrap";

const DEPS = {
  mar: "Marketer",
  dev: "Developer",
  des: "Designer"
};

const TextButton = styled.button`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
`;

const BigTextButton = styled(TextButton)`
  padding: 1rem;
  font-size: 2rem;
`;

const ModalOpenButton = ({ children }) => {
  const { open } = useModal();

  return <TextButton onClick={open}>{children}</TextButton>;
};

const ModalContent = styled.div`
  box-sizing: border-box;
  margin: 2rem 1rem;
  padding: 0 1rem;
  background-color: #fff;
  max-height: calc(100vh - 4rem);
  overflow-y: scroll;

  @media only screen and (min-width: 700px) {
    padding-bottom: 2rem;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000020;
`;

const ModalHeader = styled.div``;

const ModalImg = styled.img`
  width: 100%;
  flex-basis: 50%;
`;

const ModalTitle = styled.p`
  color: grey;
  text-align: center;
`;

const ModalLayout = styled.div`
  @media only screen and (min-width: 700px) {
    display: flex;
  }
`;

const ModalTextContainer = styled.div`
  flex-basis: 50%;
  @media only screen and (min-width: 700px) {
    margin: 2rem;
  }
`;

const ModalParagraph = styled.p``;

const ProfileModal = ({ name, imgURL, dep, desc }) => {
  const { isOpen, close } = useModal();

  return (
    <>
      {isOpen && <ModalContainer />}
      <Modal overlay>
        <ModalContent>
          <ModalHeader>
            <BigTextButton onClick={close}>❮</BigTextButton>
          </ModalHeader>

          <ModalLayout>
            <ModalImg src={imgURL} />

            <ModalTextContainer>
              <ModalTitle>{name}</ModalTitle>
              <ModalTitle>{dep}</ModalTitle>
              <ModalParagraph>{desc}</ModalParagraph>
            </ModalTextContainer>
          </ModalLayout>
        </ModalContent>
      </Modal>
    </>
  );
};

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
`;

const StyledP = styled.p`
  font-family: Lato-Bold;
  color: #555555;
  margin: 0;
`;

const StyledImg = styled.img`
  width: 155px;
  height: 196px;
  border-radius: 6px 6px 0 0;
  object-fit: cover;

  @media only screen and (min-width: 700px) {
    width: 100%;
    height: 220px;
  }
`;

const ProfileCard = ({ name, desc, imgUrl, dep }) => (
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
      dep={dep.map(d => DEPS[d]).join(", ")}
      desc={desc}
    />
  </ModalWrapper>
);

export default ProfileCard;
