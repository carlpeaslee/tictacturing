import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import SiteHeader from '../styled/SiteHeader'
import Main from '../styled/Main'
import '../utils/global.css'


injectTapEventPlugin()

class Template extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <SiteHeader/>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
