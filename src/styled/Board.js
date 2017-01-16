import React from 'react'
import {Layer, Line} from 'react-konva'

const Board = ({unit, size, rows}) => {
  let grid = []
  let stroke = 'grey'
  let strokeWidth = 10
  for (let i = 1; i < rows; i++) {
    let position = unit * i
    grid.push(
      <Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i + 'v'}
      />
    )
    grid.push(
      <Line
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i + 'h'}
      />
    )
  }
  return (
    <Layer>
      {grid}
    </Layer>
  )
}

export default Board
