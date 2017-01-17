#03_04_end

##Relay Network Layer

In this video, I’m going to show you how to configure your app so that it can read information from our Relay Api. We already took the first step way back in chapter one by telling our application how to fetch the Relay schema.

Now we need to set up the relay network layer and tell that layer how to include authorization headers if our user is logged in.

The authorization header is where our app is going to hold the token we fetched in the last video when it needs to make authenticated calls to our API.

If all of this talk about Relay has you a little confused or overwhelmed –– Maybe you’re still not even sure yet exactly what Relay does, just hold on, I’ll explain more  as we go on.

So the first thing we’re going to do for configuration is bring in three libraries

the first of course is

yarn add react-relay

then we’re going to use

yarn add react-router-relay

which will allow relay to play nicely with the routing we’ve already set up...

and then also

yarn add react-relay-network-layer

which is going to help us modify our network layer to handle authentication

In some ways, a lot of this code is kind of boilerplate –– hopefully you write it once and then forget about it –– so I’m not going to explain a ton about what’s going on...

But basically, we bring in our libraries...

And I’m also going to import a reference to our Relay API’s URL

And finally I’m also going to bring in our auth object because I’ll need to be able to check if our token is present

First I’ll add the render prop to my router and use applyRouterMiddleware(useRelay)

And then I’m going also tell my app that we’re going to create a relay store and set our router environment to that...

Now we need to inject a relay network layer ...  first we want to use urlMiddleware and set this to our Relay API .. and then we’re going to make a function right about this that will tell our network layer how to make headers for our requests depending on whether or not they are authenticated...

Ok, and now if we start up our application we should see that nothing has changed! Woohoo.
