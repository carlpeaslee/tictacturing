#02_06_end

##Building TicTacToe Part 2

The next thing I'd like to do for my TicTacToe game is to create a component, kind of like Board, but that instead of generating the grid, creates all of our game's squares.

I'm going to create that component in my TicTacToe container... And I'm going to pass it all of this state information that it's going to need... and then I also happen to know that to arrange the individual squares on my canvas, I'm going to need each squares top left corner coordinates... So I'll make those in my componentWillMount

```javascript
/*  /src/containers/TicTacToe.js    */
import React, {Component} from 'react'
import {Stage} from 'react-konva'
import Board from '../styled/Board'
import Squares from '../styled/Squares'

class TicTacToe extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   //declare some neccesary non-state variables
  // }


  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    let coordinates = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit,y*unit])
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }


  move = (moveIndex, mark) => {
    //when a user or ai clicks on a square
    //update state to reflect new move
    console.log('hello', moveIndex, mark)
  }

  makeTuringTest = () => {
    //generate the turing test after the game is over
  }

  recordGame = () => {
    //this is where we'll make our mutation to our
    //relay store when a game is over
  }


  render(){
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
    return (
      <div>
        <Stage
          height={size}
          width={size}
        >
          <Board
            unit={unit}
            size={size}
            rows={rows}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
          {/* <TuringTest/> */}
      </div>
    )
  }
}

export default TicTacToe
```
And then the next thing I'm going to do is create my Squares component. And give nice shorthand names to all of the props that I passed to it.

```javascript
/*    /src/styled/Squares   */
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
```
