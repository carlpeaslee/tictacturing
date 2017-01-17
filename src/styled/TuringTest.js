import React from 'react'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'
import {cyan500} from 'material-ui/styles/colors'

const Container = styled.div`
  left: 0;
  right: 0;
  width: 400px;
  height: 200px;
  margin: auto;
  position: absolute;
  top: 200px;
  text-align: center;
  background-color: ${cyan500};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`

const Question = styled.span`
  font-size: 25px;
  display: flex;
`

const Answers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  width: 100%;
`

const TuringTest = (props) => {
  return (
    <Container>
      <Question>Was your opponent human or robot?</Question>
      <Answers>
        <RaisedButton
          label={'Human'}
          onTouchTap={()=>{props.recordGame('HUMAN')}}
        />
        <RaisedButton
          label={'Robot'}
          onTouchTap={()=>{props.recordGame('ROBOT')}}
        />
      </Answers>
    </Container>
  )
}

export default TuringTest
