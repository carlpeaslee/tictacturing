#03_01_end

##Authentication Part Two
Now that we have a decent understanding of the way authentication is going to get carried out on our site, we’re going to create an auth class that will help us configure and use the tools made available to us by the auth0-lock library.

If you’re interested in other examples, the code I’m using for this project is based largely on code that is available through Auth0’s quickstart guides.

I’m gong to start by bring in auth0-lock and some of my configuration information.

Then i’m going to create a class.

First, I’ll give the class a constructor property –– this is where I’m saying how I will be creating my class, what information it needs... And then this next part is a configuration object –– which I’m just going to hard code here for simplicity –– this basically is going to tell auth0-lock how I want the lock widget to operate.

There are lots more configuration options availabe to this API, I encourage you to check out the docs online. For right now though I’m going to say I want auth0 to return a token, that that token’s scope of access, kind of like its permission levels should be openid, then I’m going to style the widget a bit just for fun and give it the name of my site...

I’m also going to bind the lock.show method to my class so that its available from my components. Basically this is the function we need to call when we want to show the lock widget to our user.

Then I’m going to tell my class to create an event listener that will wait for an ‘authenticated’ event. That’s the event that will trigger when we receive a successful response from one of our login attempts.

So when I hear that authenticated event, I’m going to save the important information in my browsers local storage. If you’re not familiar with localstorage, here is some more info about it.

Next I’m going to create a method that will allow me to determine whether or not the token currently in local storage is expired or not.

Next I’m going to make a short function that returns the token in local storage since I know that will come in hand later.

And finally I’m going to make a logout function which will remove my idToken and expiration information from local storage and refresh the page.

Now, I can create an instance of my class, export it, and then import it in another file.

I’m going to bring it into our NavDrawer so I can finally finish that ugly auth block. I’ll import my auth class... And then make a function that checks to see if we’re logged in or not... I’ll probably have to change that later but its fine for now... and then I’ll use that information to either show a login button that has the show lock function attached to it ... or a logout button that has the logout function attached to it.

Great, I can even check my authentication and see that my token is getting put in local storage -- and removed when I log out.
