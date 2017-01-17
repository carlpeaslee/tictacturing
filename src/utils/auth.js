import Auth0Lock from 'auth0-lock'
import {auth0Domain, auth0ClientId} from '../config/auth0'
import {cyan500} from 'material-ui/styles/colors'

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
    this.setToken({
      idToken,
      exp
    })

  }

  isCurrent() {
    let expString = localStorage.getItem('exp')
    if (!expString) {
      this.logout()
      return false
    }
    let now = new Date()
    let exp =  new Date(expString) //the ten here is for radix
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
      this.logout()
      return false
    }
  }


  logout() {
    localStorage.removeItem('idToken')
    localStorage.removeItem('exp')
  }


}

const auth = new AuthService(auth0ClientId, auth0Domain)


export default auth
