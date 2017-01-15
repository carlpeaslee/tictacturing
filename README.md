#02_03_end

##Using styled-components

[Live on Heroku](https://tictacturing-02-02.herokuapp.com/)

Next I’m going to make a presentational component called DrawerToggleButton –– this is where I’m going to add my styling so that my current toggle button is always visible.

I’m going to cut and paste the imports from NavDrawer... and then tell NavDrawer to import my new soon to be created component... I’m going to make sure to pass the new component all of the old component's props...


```javascript
/*    /src/components/NavDrawer.js    */
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import MenuLink from '../styled/MenuLink'
import DrawerToggleButton from '../styled/DrawerToggleButton'


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
        <DrawerToggleButton
          onTouchTap={this.toggle}
          open={this.state.open}
          width={this.state.width}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
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

Now in my DrawerToggleButton file I’m going to create my new component and remember to export it...Now I know in the last presentational component we created I just did a quick bit of inline styling but there is actually an even better way to do styling in React.

We are going to use a library called styled-components.

Now there are lots of other options for styling react –– some people do inline styling, you can write plain old css files and then import them (create-react-app supports this), or you can use a styling library like radium –– but in my opinion styled-components allows the most flexibility by allowing you to write with traditional css syntax and css pseudo classes like hover, focus, etc but it also allows you to include dynamic javascript variables right inside your css.

Let’s check it out.

```bash
yarn add styled-components
```

In DrawerToggleButton I’m going to import styled-components.

And I’m going to create my first styled component. Let’s name it StayVisible.

Now to declare a styled component I just use ‘styled’ and then the name of the html tag I want my new styled component to use.

Then I’m going to declare the beginning of a template literal with the ‘grave accent’ mark

```javascript

/* Template Literals*/

let exclamation = 'yowza'
let noun = 'jumbo jet'

//the template literal allows us to easily
//insert variables into a string

const madlibs = `"Oh ${exclamation}!" I said.
                 "I've never seen a ${noun} before!" `

console.log('madlibs = ', madlibs)
/*
    madlibs = '"Oh yowza!" I said.
      "I've never seen a jumbo jet before!"'
 */

```

Now I can write whatever css I want! I’m going to make this component have absolute positioning. And then I know I need to change its left margin to make it move along with the drawer... Now here is where the cool javascript stuff comes in.

Right here inside my css I can write javascript just by wrapping it in ‘${}’ and I’m going to create a quick function which accepts my components props as an argument, and then I’m going to use a succinct little ternary operator to basically say, Hey, StayVisible component, if you’re receiving the open prop –– if that prop is true, that means I want you to have a margin left of props.width pixels... If you don’t see that open prop, then don’t worry about it, just go about your business.

```javascript
/* Ternary Operator */

let smoke = true

//the ternary operator is basically a
//succinct if/else statement
let isThereAFire = (smoke) ? 'Yes!' : 'Probably not.'
/*      1             2    3   4    5        6
1 - The variable being set
2 - A boolean statement
3 - A question mark
4 - The value to return if 2 is true
5 - A colon separating the true and false values
6 - The value to return if 2 is false
*/

console.log('isThereAFire = ', isThereAFire)
//isThereAFire = 'Yes!'
```

And then lastly we’re going to give this component a transition property so that when it does change its margin, it uses a nice smooth transition.

Finally I’m going to make sure that StayVisible is also getting all of the props that it needs.

Ok, great, my components are all rendering the way I want them to.
