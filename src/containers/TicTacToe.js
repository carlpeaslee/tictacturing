import React, {Component} from 'react'
import {Stage} from 'react-konva'
import Board from '../styled/Board'

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


    this.setState({
      size,
      rows,
      unit,
    })
  }


  makeSquares = () => {
    //generate the squares
  }

  move = (moveIndex, mark) => {
    //when a user or ai clicks on a square
    //update state to reflect new move
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
      rows
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
          {/* <Squares/> */}
        </Stage>
          {/* <TuringTest/> */}
      </div>
    )
  }
}

export default TicTacToe
