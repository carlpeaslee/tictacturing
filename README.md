#02_00_end

##Planning Our Development Process

Alright, so we’ve made some great progress on our site. We’ve given our application instructions about how to get our api’s Relay schema,  implemented routing, a ui library, and finally set up a deployment process that allows us to get our code out to a production environment.

Now the fun part: building the components that will make up the bulk of our application.

Before we dive into the code, however, we should take a second to do a bit of planning. We should reflect back on our wireframe and think about what parts of the page should be made into independent components and more importantly, what parts of the page should be “containers’. We should also think: which components can be constructed so that they'll be reusable through out our site? Which components will need access to remote data? Which components will need to manage their own state? And finally, which components will want to have some styling?

I know that's a lot of think about so first lets address what I mean when I differentiate between Containers and Components. You may already have noticed that I created a Containers directory before I created a Component directory.

In our case, we are going to say that Containers are responsible for connecting to our data store (in this case a Relay api), declaring their data dependencies, and for then propagating that data down to their children.

![](/slides/02_00.001.jpeg)

Components in turn won’t be responsible for fetching their own data or for issuing mutations back to the store. Instead they will simply be responsible for using the information they receive and then passing any user actions which might affect the data back up to their parents for them to deal with.

Finally, our presentational components will be our components that require styling. They will be stateless components whose only job will be to change their appearance based on the props that are passed to them.

As we put together our site, in general,  our workflow will go like this: first we’ll plan out the components needed for a given container, then we’ll build out the components, then we’ll created presentational components, and then finally we’ll hook the containers into our data stores and write any mutations those containers might need to take.
