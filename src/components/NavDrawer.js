import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import MenuLink from '../styled/MenuLink'
import DrawerToggleButton from '../styled/DrawerToggleButton'
import AuthButton from '../styled/AuthButton'

class NavDrawer extends Component {

  state = {
    open: true,
    width: 250
  }

  toggle = () => {
    this.setState( (prevState) => {
      return {
        open: !prevState.open
      }
    })
  }

  get showIfAuthenticated () {
    if (this.props.authenticated) {
      return (
        <MenuLink
          to={'/profile'}
          onTouchTap={this.toggle}
          primaryText={'Profile'}
        />
      )
    }
  }

  render () {
    return (
      <div>
        <DrawerToggleButton
          onTouchTap={this.toggle}
          open={this.state.open}
          width={this.state.width}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <AuthButton
            auth={this.props.auth}
            authenticated={this.props.authenticated}
          />
          <Divider/>
          <MenuLink
            to={'/'}
            onTouchTap={this.toggle}
            primaryText={'Play'}
          />

          {this.showIfAuthenticated}


        </Drawer>

      </div>
    )
  }
}

export default NavDrawer
