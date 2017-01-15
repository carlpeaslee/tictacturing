import React from 'react'
import styled from 'styled-components'
import {cyan500} from 'material-ui/styles/colors'

const Container = styled.header`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`

const TextPart = styled.h1`
  display: flex;
  border-top: 2px solid grey;
  text-transform: lowercase;
  margin: 4px;
  &:hover {
    border-top: 2px solid ${cyan500};
  }
`

const SiteHeader = (props) => {
  return (
    <Container>
      <TextPart>
        Tic
      </TextPart>
      <TextPart>
        Tac
      </TextPart>
      <TextPart>
        Turing
      </TextPart>

    </Container>
  )
}

export default SiteHeader
