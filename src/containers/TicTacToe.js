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
