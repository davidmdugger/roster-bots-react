This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Dependencies

`Yarn` is used as the package manager

`react-router-dom` is used for client-side routing

## Components

`App.js` is root component sent to `index.js`

`Layout.js` imports all other main components, routing is set up here

`Landing.js` is the Landing page upon app launch.

`NotFound.js` is the 404 component when user accesses an unkown URL.

`Team.js` is the container component that will be parent to TeamNameForm, and Roster.

`Roster.js` is the component that will be parent to RosterTable and RosterButtons.

## Helper

`src/helper/index.js` houses all helper functions and variables. Such as first/last name arrays, generate random integers to get a value from those arrays, etc. This cleans up the components that require a lot of functions
