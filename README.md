#03_02_end

##Authentication Button

Alright, now that we have a way of logging in and out and creating users –– at least for the Auth0 part of our authentication flow, let's add a login/logout button to our application.

The first thing we're going to do is create our AuthButton component...

This doesn't need to have state... And then it needs to read an authenticated prop... and it needs to have access to our auth object so that it can issue showLock and logout...

But instead of bring auth in directly to this component, we're going to import it into a container. Because remember, since this is a presentational, stateless component, it would be inconsistent (and potentially confusing later) for us to import some functionality like auth into it.

Instead, we are going to import our Auth object all the way up in our Routes file. And then pass it do Template... And then pass it to NavDrawer... 
