#02_05_end

##Building TicTacToe Part 1

[Live on Heroku](https://tictacturing-02-05.herokuapp.com/)

Now that our profile page is done, we get to make our TicTacToe board –– this is going to require some fun problem solving so before I show you how I decided to make my TicTacToe board, I encourage you to try making it your own way. There are definitely lots of ways to solve these kinds of problems.

To make my life a little easier, I’m going to bring in a library called ‘react-konva’ and its dependency 'konva'. React-konva is a canvas library that will allow me to more easily create, manipulate, and respond to user interaction with a HTML5 canvas element.

```bash
yarn add react-konva konva
```

Alright, I’m going to add that library to my repository... And import it into my new TicTacToe file...


Now I’ll make my component... And make sure it is rendering to the dom...


```javascript
/*    /src/containers/TicTacToe.js    */
import React, {Component} from 'react'
import {Stage} from 'react-konva'

class TicTacToe extends Component {

  render(){
    return (
      <div>
        <h2>TicTacToe</h2>
      </div>
    )
  }
}

export default TicTacToe
```

Ok, now that I know things are working there I’m going to write some pseudo code to sketch out the things I think I’m going to need my component to do...

```javascript
/*    /src/containers/TicTacToe.js    */
import React, {Component} from 'react'
import {Stage} from 'react-konva'
//import Board from '../styled/Board'
//import Squares from '../styled/Squares'
//import TuringTest from '../styled/TuringTest'


class TicTacToe extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   //declare some neccesary non-state variables
  // }


  state = {
    //lay out our initial state
  }

  componentWillMount() {
    //calculate some other elements of state
  }

  move = (moveIndex, mark) => {
    //when a user or ai clicks on a square
    //update state to reflect new move
  }

  recordGame = () => {
    //this is where we'll make our mutation to our
    //relay store when a game is over
  }


  render(){
    return (
      <div>
        <Stage>
          {/* <Board/> */}
          {/* <Squares/> */}
        </Stage>
          {/* <TuringTest/> */}
      </div>
    )
  }
}

export default TicTacToe
```

I think for my next step I'm going to declare some of my initial state variables and then calculate and new variables and then use that information to render the game board.

I'm going to do all of this in componentWillMount.

While we're making this I also want to make sure you understand a few pieces of syntax information that can sometimes throw people off:

The first is:

```javascript
/* Destructuring Assignment */

const feast = {    //the object we will destructure
  appetizer: 'Spring Rolls',
  entree: 'Enchiladas',
  dessert: 'Apple Pie'
}

let {         //to destructure an object we declare a
  appetizer,  //new variable and then choose any number
  dessert     //of keys to create into stand alone variables
} = feasts    //we also specify the object we're destructuring

console.log('appetizer = ', appetizer)
//appetizer = 'Spring Rolls'
console.log('dessert = ', dessert)
//dessert = 'Apple Pie'
```

and the next is:

```javascript
/* Object Initializer Shorthand*/

let superPower = 'Laser eyes' //the object initializer shorthand
let weaknesses = ['puppies']    //allows us to more succinctly take a
let cape = false   //variable and turn it into a key value pair

const myHero = { // when I create a new object
  isGood: true, //  I can pass in my own key value pairs
  superPower,   //  or I can use this short hand to add
  weaknesses    //  varaibles I've already created
}

console.log('myHero = ', myHero)
/*
    myHero = {
      isGood: true,
      superPower: 'Laser eyes',
      weaknesses: ['puppies'],
    }
 */
```

Ok so here is the information I need to make the board in ComponentWillMount

```javascript
/*    /src/containers/TicTacToe.js    */
import React, {Component} from 'react'
import {Stage} from 'react-konva'
import Board from '../styled/Board'
//import Squares from '../styled/Squares'
//import TuringTest from '../styled/TuringTest'

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
```

And then you can see that I also need to create my Board component:

```javascript
/*    /src/styled/Board   */
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
```

And now when I start up my site...My board is being generated!

Next let's make the squares.
