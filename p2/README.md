This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm test`
Launches the test runner in the interactive watch mode.<br />
## Documentation
### React
The project is built with React and JSX. It was created with a TSX template. 
In this project, we have mainly made use of functional components with React hooks which let us use state and other React features without writing a class.
We have made 6 separate folders to structure and encapsulate the different files used.
*  **tests:** for our test-files
*  **audio:** for our mp3 files
*  **components:** for the functional components as well as the styling of  the components
*  **contexts:** to contain the context used. Even though we only defined one context, it is nice to have a separate folder for it in case we want to implement new contexts later
*  **hooks:** to contain the storage components
*  **images:** for all animated SVG's. All the images were made and animated with CSS by our group members.
As a lot of the methods used in React were new to us, we did not think much about implementing a context api for handling state changes when we first started.
However, the usefulness of the context api became clear when we started brainstorming about how we would like to implement localStorage. 
Initially, we wanted to implement localStorage so the value of the current selected image, audio and poem would be stored in localStorage.
In this way, the user would be able to retrieve the saved states from localStorage.
Our problem with this idea was that our components were not communicating. Thus, we chose to show use of localStorage as described below instead.

We decided to show implementation of the context api through a darkmode/lightmode feature that can be toggled through a button.
The theme and context itself is defined in ThemeContext.tsx, which is exported.
In app.tsx ThemeContext is imported, and a hook for setting the state of the theme can be found.
There is also a function for toggling between the themes, which occurs whenever a button is clicked.
All the components exported and rendered in app.tsx is wrapped in a ThemeContext.provider, thus all the components can inherit the same theme defined in the context.
For each component, the path to the ThemeContext.tsx file is imported, and we get access to the theme which is toggled between in app.tsx through useContext(ThemeContext).
Finally, style={theme} is inserted in the return div of each component.


### AJAX
We have implemented AJAX to retrieve text from PoetryDB's API using the fetch() API.
The fetch() call is run inside an useEffect() hook which is set to render only once.
Fetch takes the path to PoetryDB's API as argument and returns a promise containing a response object.
In our case the response object is a list with all poems with linecount less than 10.
This list of poems is set to ListState with the setListState method.


### Responsive Web Design
We implemented grid to make a flexible and floating layout for the web site. This was done by wrapping all the components being rendered and exported from App.tsx in a div, which we defined a grid template on.
We chose to use the fractions metric when defining the grid template, as we found this to be the easiest way to allocate space for the different components.
As grid is built with responsiveness in mind, we thought this would be the best way to ensure a good user experience when visiting the web site.
This also goes well with the animated SVG's, which scales alongside the size of the space it has been allocated within the grid template.
In addition to grid, we made use of media queries. 
Even if the device the user is viewing the web site on is a smaller computer, tablet or phone, we want the user to be able to experience the website to its fullest.
To do this we used media queries to alter the content of the website so that some of the styling changes when the screen is within the width defined in the media query.
We have defined two media queries: one for when the screen is about the size of an iphone 6/7/8plus, and one for when the screen is about the size of an ipad pro.
If the screen is bigger than an ipad pro, the default CSS will be used.
We have not used viewport in our web design. 
This is because we do not believe it is necessary to implement support for screens that are smaller and narrower than the ones defined in our media queries.
Today it is not unusual to have a mobile with a big screen and viewing an interactive gallery such as the one we have made would not be a good experience on any device smaller than this.

### Web Storage
To fulfill the requirement of implementing web storage, we have implemented localStorage and sessionStorage.
We use sessionStorage to store the value of the latest selected image, soundtrack and poem, so that if the user wishes to refresh the page, the content remains the same for the duration of the session.
This is done by saving the state of the most recently selected option directly to sessionStorage.

As localStorage is quite similar to sessionStorage, we chose to differentiate between the two by making a button which stores the value of the user's favorite poem.
Thus, if the user generates new poems or the server goes down, the value of the chosen poem is still stored in localStorage. 
The button has a toggle feature which toggles between saving the current state and loading a saved state, as well as toggling the text shown in the button to reflect the correct function of the button.
When the user finds a favorite poem, the user can click on "save poem" in order to save the state of that particular poem. 
The button will then change text to "show poem" to let the user know that a saved poem can be retrieved. 

### Testing
We have implemented testing with Jest by including a snapshottest which checks if the components DisplayAudio and DisplayPoem are rendered properly at start.
We also wanted to include a test which cheks if the fetch() API gets a list of data.
But we chose to not prioritize that because it would require us to set up a mock fetch. 
We chose to use our time to polish other things, as testing is not a main priority for this project.
In addition, we have a lot of components where testing with Jest does not make much sense.
It would make much more sense to implement more tests i.e., if we were to check if something is expected to be true or equal.

We made use of google's device toolbar, which let the user preview the web site in different formats, when changing the layout to fit the different screen sizes.
When you view the web site on a computer with a screen that is bigger than 13 inches, you will be able to see all the elements of the web site at once.
If the screen is a bit smaller, the poem will be moved underneath the image. If the screen is the size of a mobile screen, the clickable elements will be placed on top, followed by the image underneath, and the poem at the bottom.
We tested the website on responsinator.com, which displayed our website on 10 different devices.
On three of the screen sizes we tested - 15.6 inch computer, 11 inch tablet, and 4.7 inch phone - the layout was correct, and all the websites functions were present.

### Git and Coding
As both team members have experience with GIT, there were no problems with sharing code and communicating.
Although we are well aware that it is a good practice to decompose a task into several smaller issues, we did not know how big the scope of each issue would be, and making specific issues was something we forgot about inbetween all the work.
Our attention was on setting up different branches for each area we would be working on. 
We gave these branches reasonable names such as feat_img, feat_audio, etc.
We tried giving descriptive titles to the commit messages, and adopted the policy of never merging one's own code, and made sure the code was 
checked by the other team member before it was merged to master. 
This was done to avoid merging faulty code and thus improve code quality, in addition to get acquainted with the technologies used.
Since it can be hard to familiarize yourself with someone else's code, we tried giving variables and functions logical names and inserted comments briefly explaining what they do.

### Useful Sources
*  Stackoverflow
*  https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
*  https://www.youtube.com/watch?v=QBfh7D8URnc&ab_channel=FrontendTopics
*  https://grischuk.de/write-custom-react-hook-to-change-background-color-of-the-page
*  https://jestjs.io/docs/en/snapshot-testing
*  https://freemusicarchive.org/genre/Soundtrack
*  https://reactjs.org/docs/forms.html
*  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
*  https://gist.github.com/gragland/2970ae543df237a07be1dbbf810f23fe
*  https://stackoverflow.com/questions/56782452/how-to-fix-module-not-found-for-audio-files-using-file-loader-images-css-an
