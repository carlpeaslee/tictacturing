import Relay from 'react-relay'

export default class CreateGame extends Relay.Mutation {

  getMutation () {
    return Relay.QL`mutation{createGame}`
  }

  getFatQuery () {
    return Relay.QL`
      fragment on CreateGamePayload {
        player1
      }
    `
  }
  getConfigs () {
    return [{
      type: 'RANGE_ADD',
      parentName: 'player1',
      parentID: this.props.self.id,
      connectionName: 'moves',
      edgeName: 'edge',
      rangeBehaviors: {
        '': 'append',
      },
    }]
  }

  getVariables () {
    return {
      player1Id: this.props.self.id,
      winnerId: this.props.winnerId,
      player1Guess: this.props.guess,
      player1GuessCorrect: this.props.guessCorrect
    }
  }

}
