import React from 'react'
import styled from 'styled-components'

const CheckedLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0382b;
  color: #fff;
  width: 99px;
  margin: 0 8.5px;
  border: 1px solid #d0382b;
  height: 46px;
  border-radius: 3px;

  @media only screen and (min-width: 700px) {
    font-weight: 700;
    width: 250px;
    height: 30px;
    margin: 0;
    border: 2px solid #d0382b;
    letter-spacing: 0.81px;

    &:first-of-type {
      border-radius: 3px 0 0 3px;
    }

    &:last-of-type {
      border-radius: 0 3px 3px 0;
    }
  }
`
const UnCheckedLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #d0382b;
  width: 99px;
  margin: 0 8.5px;
  border: 1px solid #d0382b;
  height: 46px;
  border-radius: 3px;

  @media only screen and (min-width: 700px) {
    font-weight: 700;
    width: 250px;
    height: 30px;
    margin: 0;
    border: 2px solid #eed7d5;
    color: #9e9b9b;
    letter-spacing: 0.81px;

    &:first-of-type {
      border-radius: 3px 0 0 3px;
      border-right: none;
    }

    &:last-of-type {
      border-radius: 0 3px 3px 0;
      border-left: none;
    }
  }
`

const Label = ({checked, children}) =>
  checked ? (
    <CheckedLabel>{children}</CheckedLabel>
  ) : (
    <UnCheckedLabel>{children}</UnCheckedLabel>
  )

export default Label
