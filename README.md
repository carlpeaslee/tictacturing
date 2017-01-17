#03_00_end

##Authentication Part One

Now that our components are mostly built, we can concern ourselves with connecting them to a persistent data store.  

But what good would the information our users generated be if they couldn’t also maintain an account associated with their data. User authentication is a fairly common feature of web application development –– and unfortunately it is often a bit of a headache too.

Navigating password hashing, cross origin resource sharing (aka cors), and safely maintaining sensitive user information  all have the potential to be major pain points.

Thankfully there are a few libraries and services out there that help make things easier. One open source option for those of your interested in building your own api is passport –– with our project, I’m going to use a service called Auth0.

If you don’t have an Auth0 account, I encourage you to go create one –– they have a free level account that should meet your needs on most small hobby projects.

Once we’ve created an account, we’re going to set up a project and we’re going to record our clientId and client domain in our src/config file to access later.

We’re also going to yarn add the auth0-lock library to our project files.

```bash
yarn add auth0-lock
```

In the next video, we’re going to configure the lock library to meet our needs but first I want to briefly layout the way authentication is going to be handled on our site.

When a user arrives at our site they will have the option to login or signup, when they do they will be prompted to input their email and password into a popup created by auth0’s lock library

This library will then send the users email and password to auth0 where it will look to see if that users credentials match an account (or are eligible to be made into a new account)

If the users credentials are good, auth0 will respond to our application by passing us a json object. There are a few pieces of data in this json object –– but the most important of them is the idToken –– the idToken we will receive will be formatted as a jwtToken –– which is an open source token format.

But what all this really means is that auth0 is going to send us a long string of unique characters that have been generated based on our accounts unique encryption secrets. Our application can then parse the contents of this token into some important information like –– the identity of the user who requested the token, what that users permissions levels are, and when that token will expire.

This token is useful because we can tell our app to stash the token in local storage and then use that token to authenticate future requests –– in particular, requests that we’ll make to our graph.cool api.

Let's set up our new client on Auth0 and then bring the relevant information into a configuration file.

And we also need to make sure we are adding our local dev url AND our production url from heroku to our list of allowed domains on Auth0.
