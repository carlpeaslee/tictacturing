[#01_01_end](https://tictacturing-01-01.herokuapp.com/)

##Generating a Starter Project

I know you’re probably excited to get to the code but if you’ve worked with React before, you know that there can be a bit of configuration before you actually get to start building your application.

Because we typically write React with additional JSX and ES syntax that aren't yet supported by all browsers, we need to compile our code with a tool like babel, webpack, or grunt before most browsers can read it.

Thankfully a group of developers recognized all the hassle and confusion that were involved with configuring a react app from scratch and so they came up with a command line tool called, fittingly, “Create React App”, which we installed in the first chapter.

[Create-React-App](https://github.com/facebookincubator/create-react-app) allows us to generate new, unopinionated react applications with no build configurations. This means we won’t be locked in to any libraries we may not want to use.

Furthermore, the tool has lots of community support and there are many other tutorials that can show you how to modify the app to make use of other libraries if you decided that you do want to implement additional frameworks –– such as Redux or Bootstrap.

Since we have create-react-app installed globally we can generate our project from the command line with one command. To do that, I’m going to navigate to the directory where I’d like to save my app –– I like to keep all my projects in a folder called ‘code’ –– and then I’m going to enter the command:

```bash
create-react-app tictacturing
```

The first part says that I want to create a new react app and the first argument, tictacturing simply says the name I’d like to give my new project. After that finishes, I can examine my current directory

```bash
ls
```

and see that, great, there is my new application.

Let’s open up our new project now with Atom (or your favorite IDE) and start things up to make sure everything works.

I open the project. I open up a terminal. And now, I'm going to use `yarn` to start up my application. If you're confused about why I'm using `yarn` instead of `npm` –– don't worry. For our purposes, they are functionally the same. `yarn` allows us to do all of the same things as npm while also doing some neat stuff behind the scenes to make sure our packages are playing nicely with one another.

```bash
yarn start
```

A bunch of stuff runs.... And create-react-app even opens up a browser window for us. Cool here is our application.

Ok, now let’s take a look at the files that create-react-app has built for us.

We have our node_modules with all of our dependencies...

And a folder called public... This is where our application will eventually get mounted –– and the file that will be sent to users. I'm going to make a few quick changes to it...

```html
<title>TicTacTuring</title>
```

...and then I'm also going to delete the favicon and swap it out with my own...And also add a png version of my informal logo in case I need an image later. Create-react-app has a cool feature that allows you to access any file in your public directory at its root url –– eg. tictacturing.io/logo.png.

Next I'm going to delete everything in the src directory except for the index file. I know this feels dangerous but don't worry! We know what we're dong. We’re not going to be using a typical css file, we’re going to be using styled-components, and right now we’re not going to be doing any tests.

Testing is great! And test driven development is even better. These are definitely things we’ll want to implement in later versions -- but right now we’re going to forget about them! We're trying to get to MVP!

I’m also going to make a few edits to our index file.

```javascript
/*    /src/index.js   */
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <h1>TicTacTuring</h1>
  </div>,
  document.getElementById('root')
)
```

Last, I'll check to make sure things are still loading.
