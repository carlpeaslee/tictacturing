import React, {Component} from 'react'
import Relay from 'react-relay'
import TicTacToe from './TicTacToe'

class Home extends Component {

  render () {
    return (
      <TicTacToe/>
    )
  }
}

export default Relay.createContainer(
  Home, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
          }
        }
      `,
    },
  }
)
