#02_07_end
[Previous Video](../../tree/02_06_end) | [Next Video](../../tree/02_08_end)
##Building TicTacToe Part 3

[Live on Heroku](https://tictacturing-02-07.herokuapp.com/)

The last thing we're going to do on our TicTacToe game for now is set up the move function.


This is where we are going to react to moves and make sure everything updates accordingly. It's also where I'm going to implement some of our games rules –– like making sure people can't go when its not their turn and checking to see if someone has won.

I'm also going to use this opportunity to build out a fake opponent so that we can see what happens when we have another person playing.

```javascript
import React, {Component} from 'react'
import {Stage} from 'react-konva'
import Board from '../styled/Board'
import Squares from '../styled/Squares'

class TicTacToe extends Component {

  constructor(props) {
    super(props)
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }


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
    this.setState((prevState,props) => {
      let {
        gameState,
        yourTurn,
        gameOver,
        winner
      } = prevState
      yourTurn = !yourTurn
      gameState.splice(moveIndex, 1, mark)
      let foundWin = this.winChecker(gameState)
      if (foundWin) {
        winner = gameState[foundWin[0]]
      }
      if (foundWin || !gameState.includes(false) ) {
        gameOver = true
      }
      if (!yourTurn && !gameOver) {
        this.makeAiMove(gameState)
      }
      return {
        gameState,
        yourTurn,
        gameOver,
        win: foundWin || false,
        winner
      }
    })
  }

  winChecker = (gameState) => {
    let combos = this.combos
    return combos.find( (combo) => {
      let [a,b,c] = combo
      return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
    })
  }

  makeAiMove = (gameState) => {
    let otherMark = this.state.otherMark
    let openSquares = []
    gameState.forEach( (square, index) => {
      if (!square) {
        openSquares.push(index)
      }
    })
    let aiMove = openSquares[this.random(0,openSquares.length)]

    setTimeout(()=>{
      this.move(aiMove,otherMark)
    }, this.random(1000,2000))
  }

  random = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
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

[Previous Video](../../tree/02_06_end) | [Next Video](../../tree/02_08_end)
