#01_04_end

##Setting up React Router


Let’s take a second and look again at the site we’re working towards. Our application, like many single page applications, relies on routing –– or the ability to read changes in the url and use that information to inform the application about which views and data should be rendered to the page.

Since we’re building a single page application, we need to utilize a client side routing library to help our application manage and consume the information stored in the browser’s url.


For this we’re going to use a popular library called `react-router`.

React Router allows us to make use of url information in our applications all while writing very React-like code.

Our first step will be to

```bash
yarn add react-router
```

Next we’re going to open up our index.js file and get to work bringing in our router.

(I’m going to make a few cosmetic changes to the pre-generated code too while I’m here because this is what I’m use to //remove semi-colons)

I’m going to import the Router module and make this our root component. And then I’m also going to bring in browserHistory and pass it as a prop to Router’s history options.

history={browserHistory} will allow our application to access our browser’s history information –– which means that we can use nice pretty urls. React Router provides us with other history options but I think this one is the most useful.

Next we’re going to create the different routes our site will need so that we can inform our router about them.

I’m going to preemptively import them and add them to my src/index.js file even though we know they don’t actually exist yet... So let’s fix that!
As you perhaps saw when I was importing my soon to be created files, I decided I’m going to put them in a new folder called ‘routes’  and then create an index.js file to go in it.

(a side note –– When I create an index file in a directory, javascript allows me access that file simply by referring to the directory. It’s not a big deal, I just think it can make things look a little cleaner when we start importing and exporting more parts of our application.

First I’ll bring in React ... and then a couple more components from React Router, namely Route and IndexRoute.

These two modules are very similar, they both tell our application what components to render when it encounter a given route –– the only difference is that IndexRoute can only handle plain ‘/’ or ‘index’ routes.

My next step is to declare a function that will return a router setup.

The Route component expects two props to be passed to it. The first is ‘path’ –– this prop defines the url (or many urls –– we can use wildcards) that will activate this route.

And the second prop Route wants is ‘component’ –– this will tell the route which component to render when the component’s path requirements are met.

And I’m going to optimistically type in the name of a component even though it doesn’t quite exist yet.

At the bottom of this file I’m going to create the component named Routes which you’ll remember I imported in my src/index file and I’m going to set Routes equal to the component that gets returned by my createRoutes function and then export Routes at the bottom of the page.

Because we’re going to make that component now!

Let’s create a directory in our src directory called ‘containers’ and then I’m going to make a file called ‘Template’.

I bring in react and this time I’ll also bring in Component and create my new Template component

The cool thing about react-router and the route component is that it allows me to direct my router to render children roots inside their parents.

This means I can make this template root act like exactly that, a template. I’m going to create a space for a header. And a main tag... And a footer... And then I’m going to use’s React’s {this.props.children} feature to tell my template to render all of its children, here between the two main tags.

And so what this all amounts to is that I’ve now created a template interface that will appear on every page and then the unique contents of each of those pages will appear here when the user navigates to those specific routes.

I won’t forget to export the file.

Great, let’s go back to routes...
And if I start things up I should be able to see the template component I just created being rendered to the screen.

Cool.

Let’s also declare a home page with Index Route -- no path needed there... and tell it to render a soon to be created component which we’ll call Home... and then I’m also going to create the route which will direct users to their Profile page.

I’ll import these files.

And then make them quickly by copying and pasting our template file from before!

Now if I start up my application I can see that Home is being rendered on my indexroute -- and if I navigate to Profile, there is my profile component.

Great.
