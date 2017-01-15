#02_04_end

##Styling the template

[View live on Heroku](https://tictacturing-02-04.herokuapp.com/)

Now that we know how to use styled components, let's get some more practice by using our skills to spruce up the elements currently being used in our template component.

I’ll get rid of the header I’ve got now in Template and import my soon to be created SiteHeader

I’ll create my SiteHeader component, it doesn’t need to have access to state so we’ll make it this way...

Then we’ll create a container styled component... I like using flex... we’ll center it ... and then I’ll also create these three TextPart styled components to put the text in....

And I’m also going to use a hover pseudo selector to make things a little fancy...

Now I’m going to delete my main tag in Template and import the new one i’m going to create...

I bring in styled components... and as I continue to create this, I’m realizing that I need to make sure these styles are going to be responsive –– that is, that they’ll also work well on mobile...

Well, it looks like I lucked out with my button –– and I know that one of the nice things about the material-ui library is that most of their components are already set up to work nicely on mobile devices...

But I should get my styled-components ready to play nice also...

To do that I’m going to create and export a media object that I can reuse later whenever I want to make things mobile responsive...

create directory called utils

create file called media

Now in this file I need to import styled-components css object and then use that to create what is called a tagged template literal... I’m going to just make one size guideline at first, handheld.

Then I’ll import it into my main component.

And use it in my styled component–– and this will tell my styled component to add these styles when my css media query is true.... thus my new width styling will overwrite my old whenever a user is browsing my app on a handheld device.

Last I think I want to take this opportunity to create a global stylesheet.

I think I want all of the text on my page to use the Roboto font just like material-ui but I don’t want to go through and specify that every time I create a text element. My solution is that I’m going to make this global.css file....

And say Body {font-family:roboto} and then I’m going to import this into my template file like so...
