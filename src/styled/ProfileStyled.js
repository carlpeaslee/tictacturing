import {media} from '../utils/media'
import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  border: 1px rgb(200,200,200) solid;
  width: 800px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  ${media.handheld`
    width: 100%;
  `}
`

export const Name = styled.h2`
  display: flex;
`

export const GameListHeader = styled.h4`
  display: flex;
  padding-bottom: 2px;
  margin: 10px 0 5px 0;
`

export const GameList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 5px;
  border: 1px lightgrey solid;
  justify-content: center;
`

export const GameRecord = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;
  margin: 1px 0;
  background-color: ${props=>(props.index % 2 === 1)? 'rgb(225,225,225)' : 'rgb(240,240,240)'};
  box-sizing: border-box;
`

export const ColumnLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;
  margin: 3px 0;
  box-sizing: border-box;
  font-weight: bold;
`

export const Column = styled.span`
  display: flex;
  width: 25%;
`
