import React from "react";
import styled from "styled-components";

const CheckedLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0382b;
  color: #fff;
  font-family: Lato-Regular;
  width: 99px;
  margin: 0 8.5px;
  border: 1px solid #d0382b;
`;
const UnCheckedLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #5c5c5c;
  font-family: Lato-Regular;
  width: 99px;
  margin: 0 8.5px;
  border: 1px solid #d0382b;
`;

const Label = ({ checked, children }) =>
  checked ? (
    <CheckedLabel>{children}</CheckedLabel>
  ) : (
    <UnCheckedLabel>{children}</UnCheckedLabel>
  );

export default Label;
