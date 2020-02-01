import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.section`
  margin: 0 auto;
`

const Image = ({ src, height = '30vh', width = '100%' }) => (
  <BackgroundImage
    style={{
      height,
      background: `url(${src}) no-repeat center center/cover`,
      width
    }}
  />
)

export default Image
