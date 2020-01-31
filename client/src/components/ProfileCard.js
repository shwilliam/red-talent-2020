import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 155px;
  height: 66px;
  display: flex;
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

const ProfileCard = ({ name, imgUrl }) => (
  <>
    <StyledDiv>
      <StyledP>{name}</StyledP>
    </StyledDiv>
    <StyledImg src={imgUrl} />
  </>
);

export default ProfileCard;
