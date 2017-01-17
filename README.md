#02_04_end
[Previous Video](../../tree/02_03_end) | [Next Video](../../tree/02_05_end)
##Styling the template

[View live on Heroku](https://tictacturing-02-04.herokuapp.com/)

Now that we know how to use styled components, let's get some more practice by using our skills to spruce up the elements currently being used in our template component.

I’ll get rid of the header I’ve got now in Template and import my soon to be created SiteHeader

```javascript
/*    /src/containers/Template.js   */
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import SiteHeader from '../styled/SiteHeader'

injectTapEventPlugin()

class Template extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <SiteHeader/>
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

I’ll create my SiteHeader component, it doesn’t need to have access to state so we’ll make it this way...

Then we’ll create a container styled component... I like using flex... we’ll center it ... and then I’ll also create these three TextPart styled components to put the text in....

And I’m also going to use a hover pseudo selector to make things a little fancy...

```javascript
/*    /src/styled/SiteHeader.js   */
import React from 'react'
import styled from 'styled-components'
import {cyan500} from 'material-ui/styles/colors'

const Container = styled.header`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`

const TextPart = styled.h1`
  display: flex;
  border-top: 2px solid grey;
  text-transform: lowercase;
  margin: 4px;
  &:hover {
    border-top: 2px solid ${cyan500};
  }
`

const SiteHeader = (props) => {
  return (
    <Container>
      <TextPart>
        Tic
      </TextPart>
      <TextPart>
        Tac
      </TextPart>
      <TextPart>
        Turing
      </TextPart>

    </Container>
  )
}

export default SiteHeader
```

Now I’m going to delete my main tag in Template and import the new one i’m going to create...

```javascript
/*    /src/containers/Template.js   */
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import SiteHeader from '../styled/SiteHeader'
import Main from '../styled/Main'


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
```

I bring in styled components... and as I continue to create this, I’m realizing that I need to make sure these styles are going to be responsive –– that is, that they’ll also work well on mobile...

Well, it looks like I lucked out with my button –– and I know that one of the nice things about the material-ui library is that most of their components are already set up to work nicely on mobile devices...

But I should get my styled-components ready to play nice also...

To do that I’m going to create and export a media object that I can reuse later whenever I want to make things mobile responsive...

```javascript
/*    /src/utils/media.js   */
import {css} from 'styled-components'


export const media = {
  handheld: (...args) => css`
    @media (max-width: 800px) {
      ${ css(...args) }
    }
  `
}
```

Now in this file I need to import styled-components css object and then use that to create what is called a tagged template literal... I’m going to just make one size guideline at first, handheld.

Then I’ll import it into my Main component.

And use it in my styled component–– and this will tell my styled component to add these styles when my css media query is true.... thus my new width styling will overwrite my old whenever a user is browsing my app on a handheld device.

```javascript
/*    /src/styled/Main.js   */
import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'


const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  min-height: 80vh;
  ${media.handheld`
    width: 100%;
  `}
`

const Main = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Main
```

Last I think I want to take this opportunity to create a global stylesheet.

I think I want all of the text on my page to use the Roboto font just like material-ui but I don’t want to go through and specify that every time I create a text element. My solution is that I’m going to make this global.css file....

```css
/*    /src/utils/global.css   */
body {
  font-family: 'Roboto', sans-serif;
}
```

And say Body {font-family:roboto} and then I’m going to import this into my template file like so...

```javascript
/*    /src/containers/Template.js   */
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
```

[Previous Video](../../tree/02_03_end) | [Next Video](../../tree/02_05_end)
