import Auth0Lock from 'auth0-lock'
import Relay from 'react-relay'
import {auth0Domain, auth0ClientId} from '../config/auth0'
import {cyan500} from 'material-ui/styles/colors'
import CreateUser from '../mutations/CreateUser'
import SigninUser from '../mutations/SigninUser'

class AuthService {
  constructor(clientId, domain) {

    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        params: {
          scope: 'openid email',
        },
      },
      theme: {
        logo: `${window.location.origin}/logo.png`,
        primaryColor: cyan500
      },
      languageDictionary: {
        title: "TicTacTuring"
      },
    })

    this.showLock = this.showLock.bind(this)

    this.lock.on('authenticated', this.authProcess.bind(this))


  }

  showLock() {
    this.lock.show()
  }


  setToken = (authFields) => {
    let {
      idToken,
      exp
    } = authFields
    localStorage.setItem('idToken', idToken)
    localStorage.setItem('exp', exp * 1000)
  }

  authProcess = (authResult) => {
    const {
      exp,
      email
    } = authResult.idTokenPayload
    console.log(email)
    const idToken = authResult.idToken

    this.signinUser({
      idToken,
      email,
      exp
    }).then(
      success => success,
      rejected => {
        this.createUser({
          idToken,
          email,
          exp
        }).then()
      }
    )
  }

  isCurrent() {
    let expString = localStorage.getItem('exp')
    if (!expString) {
      localStorage.removeItem('idToken')
      return false
    }
    let now = new Date()
    let exp =  new Date(expString)
    if (exp < now) {
      this.logout()
      return false
    } else {
      return true
    }
  }

  getToken() {
    let idToken = localStorage.getItem('idToken')
    if (this.isCurrent() && idToken) {
      return idToken
    } else {
      localStorage.removeItem('idToken')
      localStorage.removeItem('exp')
      return false
    }
  }


  logout() {
    localStorage.removeItem('idToken')
    localStorage.removeItem('exp')
    location.reload()
  }


  createUser = (authFields) => {
    return new Promise( (resolve, reject) => {
      Relay.Store.commitUpdate(
        new CreateUser({
          email: authFields.email,
          idToken: authFields.idToken,
          name: authFields.name
        }), {
          onSuccess: (response) => {
            this.signinUser(authFields)
            resolve(response)
          },
          onFailure: (response) => {
            console.log('CreateUser error', response)
            reject(response)
          }
        }
      )
    })
  }

  signinUser = (authFields) => {
    let {
      idToken,
    } = authFields
    return new Promise ( (resolve, reject) => {
      Relay.Store.commitUpdate(
        new SigninUser({
          idToken
        }), {
          onSuccess: (response) => {
            this.setToken(authFields)
            resolve(idToken)
          },
          onFailure: (response) => {
            reject(response.getError())
          }
        }
      )
    })
  }

}

const auth = new AuthService(auth0ClientId, auth0Domain)


export default auth
