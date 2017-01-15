#02_02_end

##Presentational Components

[Live on Heroku](https://tictacturing-02-02.herokuapp.com)

As I said in the last video while we were working to create our NavDrawer, we want to avoid mixing functional components with presentation components, so in this video we’re going to build one of two presentational components.

The first one is pretty simple, I just want to tell my menu items not to inherit the underline css from the <a> html tags. For the other styled component, I want to make my drawer toggle button stay visible even when the drawer is open.

Let’s start by creating my modified menu item component. I’m going to call it MenuLink.

First, I’m going to create a new directory in my project called ‘styled’ -- this is where I’ll put all of my styled components.

Now here is my MenuLink component -- and actually I’m just going to bring in React, not component here because I plan to make this a stateless component.

This MenuLink is not going to need access to state, it’s just going to change based on the props that it receives.

```javascript
/*    /src/styled/MenuLink.js   */
import React from 'react'
import {Link} from 'react-router'
import MenuItem from 'material-ui/MenuItem'


const MenuLink = (props) => {
  return (
    <Link
      to={props.to}
      style={{
        textDecoration: 'none'
      }}
    >
        <MenuItem
          {...props}
        />
    </Link>
  )
}

export default MenuLink
```

I’m going to bring in Link and MenuItem from NavDrawer and delete them from NavDrawer...And put in my new MenuLink, passing it the same props that link and MenuItem had...

```javascript
/*    /src/components/NavDrawer.js    */
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
```

Now in MenuLink I’m going to make sure that these props are being provided to my component, and then distributed where they are needed. And here I’m going to pass all of my props to MenuItem like this...

Cool so things work on the home page when I visit but I see that I still haven’t fixed my underlining. Normally I try and avoid using too many inline styles but sometimes its the easiest way to do things –– especially when we’re using Material-Ui which relies very strongly on inline styles.
