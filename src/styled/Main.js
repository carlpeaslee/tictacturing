import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'


const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  min-height: 80vh;
  ${media.handheld`
    width: 100%;
  `}
`

const Main = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Main
