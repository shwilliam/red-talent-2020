import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 155px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
`;

const StyledP = styled.p`
  margin: 0;
`;

const StyledImg = styled.img`
  width: 155px;
  height: 200px;
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
