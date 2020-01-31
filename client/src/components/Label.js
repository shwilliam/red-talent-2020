import React from "react";
import styled from "styled-components";

const CheckedLabel = styled.label`
  background-color: #d0382b;
  color: #fff;
  font-family: Lato-Regular;
  width: 50px;
  padding: 10px 5px;
`;
const UnCheckedLabel = styled.label`
  background-color: white;
  color: #000;
  font-family: Lato-Regular;
  width: 50px;
  padding: 10px 5px;
`;

const Label = ({ checked, children }) =>
  checked ? (
    <CheckedLabel>{children}</CheckedLabel>
  ) : (
    <UnCheckedLabel>{children}</UnCheckedLabel>
  );

export default Label;
