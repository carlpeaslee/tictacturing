import React, {Component} from 'react'
import Relay from 'react-relay'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/ProfileStyled'


class Profile extends Component {

  get records () {
    return this.props.viewer.user.p1games.edges.map((edge, index)=>{
      let {
        node: game,
      } = edge
      return (
        <GameRecord
          key={game.id}
          index={index}
        >
          <Column>
            {(game.winner) ? 'Won!' : "Didn't win"}
          </Column>
          <Column>
            {game.player1Guess}
          </Column>
          <Column>
            {(game.player1GuessCorrect) ? 'Yes' : 'No'}
          </Column>
          <Column>
            {new Date(game.createdAt).toLocaleDateString()}
          </Column>
        </GameRecord>
      )
    })

  }

  render () {
    let {
      email
    } = this.props.viewer.user
    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            My Games
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Relay.createContainer(
  Profile, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
            email
            p1games (first: 10) {
              edges {
                node {
                  id
                  createdAt
                  winner {
                    id
                  }
                  player1Guess
                  player1GuessCorrect
                }
              }
            }
          }
        }
      `,
    },
  }
)
