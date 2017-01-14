#00_02_start

##Installing Local Dependencies

Throughout this course, we're going to be accessing a number of programs via our command line which means that you'll need to have them installed and running on your local machine.  

The programs you'll need are:
-node / npm
-yarn
-git
-heroku-cli
-homebrew
-create-react-app

If you already have all of these, feel free to skip this video!

The first application we're going to install is homebrew:

First we'll navigate to their website:

http://brew.sh/

And then we'll copy and paste this line into our terminal:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Once that's installed, you should have `brew` available from your command line.

First we'll install node / npm and yarn. It's ok if you haven't heard of yarn before –– just know its basically like npm but with some added features that help keep your dependencies working together nicely.

```bash
brew install yarn
```

This will give us both node and yarn.

Next up, heroku-cli:

Let's get this one from Heroku's website:

https://devcenter.heroku.com/articles/heroku-cli

Just download and run the installer.

Finally, let's get create-react-app from the command line with

```bash
npm install -g create-react-app
```

Ok, we're ready to get developing!
