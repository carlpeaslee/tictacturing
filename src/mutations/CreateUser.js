import Relay from 'react-relay'

export default class CreateUserMutation extends Relay.Mutation {

  getMutation () {
    return Relay.QL`mutation{createUser}`
  }

  getVariables () {
    return {
      email: this.props.email,
      authProvider: {
        auth0: {
          idToken: this.props.idToken
        }
      },
    }
  }

  getFatQuery () {
    return Relay.QL`
      fragment on CreateUserPayload {
        user {
          id
        }
        viewer {
          id
        }
      }
    `
  }

  getConfigs () {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      connectionName: 'allUsers',
      edgeName: 'user',
      rangeBehaviors: {
        '': 'append',
      },
    }]
  }
}
