#01_05_end

##Implementing Material-UI

[Live example on Heroku](https://tictacturing-01-05.herokuapp.com/)

Alright, we have our application running and it even has routing but unfortunately it doesn’t look too hot right now.

When we’re trying to develop quickly, it is often beneficial to make use of a UI styling library.

![](/slides/01_05.001.jpeg)

Sure, in the long run, we’re probably going to want to custom create and style a lot of our components from scratch so they work and look exactly the way we like –– but in the mean time we can save a lot of time and effort by using the pre-built but still quite configurable components provided by a library like Material-Ui.

![](/slides/01_05.002.jpeg)


We’re going to use material-ui which is based on google’s material design guidelines –– but there are lots of other UI libraries out there like React-Bootstrap which may or may not better fit the aesthetic you’re looking for.

![](/slides/01_05.003.jpeg)

First we’ll add material ui to our project files...

```bash
yarn add material-ui
```

and then we’ll also add one of its dependencies...

```bash
yarn add react-tap-event-plugin
```

Next, in our Template.js file we’ll import and implement the MuiThemeProvider component.

And import and  inject the react-tap-event plugin...

```javascript
/*  /src/containers/Template.js   */
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

class Template extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTuring</h1>
            <RaisedButton
              label={'Hello'}
              primary
              onTouchTap={()=>console.log('Hello!')}
            />
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

And from now on we’ll be able to use any of the pre-built materiaul-ui components within our project. We just need to import them and then configure them according to their documentation...

Here, we can try out a simple button real quick. Great, looks like everything is working.
