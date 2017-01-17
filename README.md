#03_03_end

##Using Relay

In the next video, we’re going to take the next steps towards hooking in to our Relay API but if you’re unfamilar with Relay or GraphQL there is a chance that you’re starting to feel a little nervous...

Maybe you’re not even sure yet what exactly it is that Relay does...

So before we go any further, I wanted to take a few seconds and talk a bit more about Relay and describe some situations where it might be useful.

First tho let’s answer the question: What is Relay?

From LearnRelay.org:

Relay is an open source framework from Facebook for building data-driven React applications, which is heavily inspired by React. React lets you build your UI declaratively, Relay lets you describe your data declaratively using GraphQL. Each component can specify its own data dependencies, Relay will take care of fetching data from a remote server and makes sure that the required data is available to be used inside the component before it gets rendered to the screen. Moreover, Relay helps you manage the data in an efficient way by using batching, caching, diffing, and a lot more! Here are some other benefits that Relay brings to the table:
Co-locating data with the component view, that makes it easier to reason about the structure of your data
No over-fetching and no under-fetching, you get exactly the data you require, all in a single request
Data masking, a component can only access its specified data which prevents subtle errors



Another important thing to be prepared for is that Relay relies on a GraphQL configured server. GraphQL asks us to imagine all of our data as a web of ‘nodes’ connected by ‘edges’.

If you’re used to doing your backend thinking in SQL tables or json documents, this change can be a little difficult to wrap your head around at first but its actually quite intuitive once you get use to it...

To help, GraphQL servers have a neat visualization mode which you can access, either at your own api’s graphql url -- or internally in your graph.cool playground –– here is my completed app’s graphql explorer –– here I can see that my API is divided into two parts –– it has queries which allow me to retrieve data and it has mutations which allow me to change data...

If I start to explore the queries, I start to get a sense of the way my data is connected.

If you are still confused, its ok, I’m going to tell you enough to get through this course and I’m also going to give you lots of links to other tutorials and sights which will explain relay in more depth  
