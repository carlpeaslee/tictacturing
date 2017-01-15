#02_01_end

##Building a NavDrawer


For our first component, we’re going to implement a Drawer from material-ui and we’re going to use that drawer for navigation and eventually to hold our login component.

Also, when I think about this component -- NavDrawer let’s call it, I don’t think that it’s going to need access to any of our data so that means we don’t need to make it a container –– it can just be a component.
We’ll begin by importing our soon to be created component into Template and then will go ahead and create it.

```javascript
/*    /src/containers/Template    */
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'


injectTapEventPlugin()

class Template extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <header>
            <h1>TicTacTuring</h1>

          </header>
          <main>
            {this.props.children}
          </main>
        </div>
    </MuiThemeProvider>
    )
  }
}

export default Template
```

Now I’m going to create my component

And I’m going to export it.

Now I’m going to bring in my material ui components.

I think I’m going to want a Floating Action Button for opening and closing the drawer. And the menu icon to go inside of it.

And of course the drawer component. And then I’ll want a menu-item, and a divider.

I’ll import each of these to my component and then add them to the render function.

When I check my site I see that the button is there but the drawer isn’t. Ah, that is because I’m not passing it all of the props it needs. When I check the material-ui documentation, I see that to get the drawer to have the behavior I want, I need to pass it an open props so that it knows when it should be open.  And I’m also going to give it a width props of 250.

I’ll initialize open as true so that my drawer starts out open...

And I know that I want to eventually build a login component to go here... So I’m going to just put a div with some text in it and give it some quick, garish inline styles so I don’t forget about it.

Now let’s write the function that will open and close the drawer.

I’ll create a toggle function here that will say whenever this function gets called, look at the previous state of open and then set the new state to be the opposite of that.

And I’ll pass my toggle function to my button as a prop. And notice here that I’m using that ‘onTouchTap’ prop that we injected earlier. I could say onClick –– and for non-material-ui components, that’s usually what you’d want to do –– but for Material-Ui components, onTouchTap tends to work better for mobile devices.

I’m also going to give this toggle function to each of my menu-items because I want my drawer to close when the user selects either of them.

Let’s take a look at our page now.

Ok, cool. My drawer opens and closes... But my menu-items aren’t links yet ...

To make them link, I’m going to bring in another react-router component, this one is called Link

I’ll import it... And then I’ll wrap each of my menu items in it. And then each Link component wants a ‘to’ prop so it knows where TO direct the user.


```javascript
/*    /src/components/NavDrawer.js    */
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import {Link} from 'react-router'

class NavDrawer extends Component {

  state = {
    open: true
  }

  toggle = () => {
    this.setState( (prevState: {open: boolean}, props: object) => {
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
          <Link
            to={'/'}
          >
            <MenuItem
              onTouchTap={this.toggle}
              primaryText='Play'
            />
          </Link>
          <Link
            to={'/profile'}
          >
            <MenuItem
              onTouchTap={this.toggle}
              primaryText={'Profile'}
            />
          </Link>


        </Drawer>

      </div>
    )
  }
}

export default NavDrawer
```

Let’s test... Great, our routing is working... But I don’t like the way my menu-items are underlined like that.

It looks like the Link’s root a html tag’s default text-decoration underline is being inherited by the list item being created by the MenuItem component.

I also don’t like that my drawer toggle button is stuck behind the drawer like this.

It looks like I need to modify the styling of these two components. I could just do that here in this file with inline styles like I did with the login component –– but that was just supposed to be a placeholder. In general, I like to try and separate my functional components –– the ones that are dictating behavior from my presentational components –– the ones that are controlling the way things look.
