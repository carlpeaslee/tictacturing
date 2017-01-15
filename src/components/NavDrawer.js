import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import {Link} from 'react-router'

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


  render () {
    return (
      <div>
        <FloatingActionButton
          onTouchTap={this.toggle}
        >
          <Menu />
        </FloatingActionButton>
        <Drawer
          open={this.state.open}
        >
          <div
            style={{
              height: '100px',
              backgroundColor: 'salmon'
            }}
          >
            Login Component
          </div>
          <Divider/>
          <MenuLink
            to={'/'}
            onTouchTap={this.toggle}
            primaryText={'Play'}
          />
          <MenuLink
            to={'/profile'}
            onTouchTap={this.toggle}
            primaryText={'Profile'}
          />


        </Drawer>

      </div>
    )
  }
}

export default NavDrawer
