#01_06_end

##Deploying to Heroku


I know we’ve been doing a lot of setup work and you’re probably anxious to start building some of the sites functionality but before we get to that we’re going to see how we can set up our application so that it can be easily deployed out to the real live internet via Heroku.

Heroku is a web service which allows us to deploy our site just by pushing our code up to a Heroku repository. Before we get to that though we of course have to make a few tweaks.

If you’re not familiar with Heroku, I encourage you to create an account and poke around the site a bit. You should also make sure you have the Heroku cli tool installed globally on your local machine since we’ll be using Heroku from the command line throughout this course.

One of the neat things about us using create-react-app to build our starter project was that it now allows us to use the create-react-app buildpack for Heroku which is publicly available here...

[create-react-app Buildpack for Heroku](https://github.com/mars/create-react-app-buildpack)

A buildpack is essentially a piece of code that is going to tell Heroku how to compile, configure, and start the code we deploy to our Heroku repository so that the code on Heroku runs like the code that we have running in our local dev environment.

Before we can deploy from the command line, however, we need to make sure we’re logged in. Once we are we will execute

```bash
heroku create YOURAPPNAME --buildpack https://github.com/mars/create-react-app-buildpack
.git
```

Then we’re going to set our graphql endpoint variable to work on Heroku as well

```bash
heroku config:set GRAPHQL_ENDPOINT='https://api.graph.cool/relay/v1/cixqegi9u003g0196b2rtnhqu'
```

And from now on, to deploy, all we need to do is

```bash
git add .
git commit -m ‘OUR_COMMIT_MESSAGE’
git push heroku master
```

And look how we can check out our page just by doing Heroku open.

But wait, this is all very cool. However if we test to see if we can access our other routes –– Like `/profile` for instance –– we will see that we’re getting an error.

This is being caused by our use of browser history. Essentially the server and our routing library aren't fighting each other to interpret the url. Thankfully this isn’t too difficult of a bug to fix.

We just need to create a file called `static.json` in our root directory and paste in the following text:

```json
  static.json
{
  "root": "build/",
  "clean_urls": false,
  "routes": {
    "/**": "index.html"
  }
}
```
Now if deploy to heroku again we’ll see that our routing works just fine.
