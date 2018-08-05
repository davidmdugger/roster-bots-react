This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Dependencies

`Yarn` is used as the package manager

`react-router-dom` is used for client-side routing

## Components

`index.js` renders the app to `public/index.html`

`App.js` is root component sent to `index.js`

`Layout.js` imports all other main components, routing is set up here

`Landing.js` is the Landing page upon app launch.

`NotFound.js` is the 404 component when user accesses an unkown URL.

`Team.js` is the container component that will be parent to TeamNameForm, and Roster.

`Roster.js` is the component that will be parent to RosterTable and RosterButtons.
