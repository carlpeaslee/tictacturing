import React from 'react'
import {Layer, Text} from 'react-konva'

const Squares = ({
  unit,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move
}) => {
  let squares = coordinates.map( (position, index) => {
    let makeMove = move
    let mark = gameState[index]
    let fill = 'black'
    if (win && win.includes(index)) {
      fill = 'lightgreen'
    }
    if (gameOver || !yourTurn || mark) {
      makeMove = () => console.log('nope!')
    }
    return (
      <Text
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        fontSize={unit}
        width={unit}
        text={mark}
        fill={fill}
        fontFamily={'Helvetica'}
        align={'center'}
        onClick={(event)=>{
          let index = event.target.index
          makeMove(index, ownMark)
        }}
      />
    )
  })
  return (
    <Layer>
      {squares}
    </Layer>
  )
}

export default Squares
