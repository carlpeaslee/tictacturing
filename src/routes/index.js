import React from 'react'
import Relay from 'react-relay'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import auth from '../utils/auth'

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
}

const userOnly = (nextState, replace) => {
  if (!auth.getToken()) {
    replace('/')
  }
}

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      auth={auth}
      queries={ViewerQueries}
    >
      <IndexRoute
        component={Home}
        queries={ViewerQueries}
      />
      <Route
        path='/profile'
        component={Profile}
        queries={ViewerQueries}
        onEnter={userOnly}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes
