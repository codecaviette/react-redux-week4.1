// This is where our application-level state will live; code is not changed much
// File name is NOT capitalized bc it's not a React component, just js

import { createStore, applyMiddleware, compose } from 'redux';      // These basically make your redux work. applyMiddleware: dispatch actions, compose: brings in middleware and any other third party apps
import thunk from 'redux-thunk';                                    // Allows us to use dispatch; a thunk is a fxn that returns another fxn 
import rootReducer from './reducer';                                // Don't need to write index.js after './reducer' bc that file will be imported by default, as long as there is one.

const initialState = {};         // Set initial app-level state to an empty object
const middleware = [thunk];      // Allows us to create actions and dispatch at the same time

// Takes a rootReducer, initialState, and some middleware
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),             // Pass middleware variable defined above
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()         // To use these, need to have Redux dev tool enabled in Chrome. Help debug 
    )
);

export default store;



// Redux terminology:
    // Actions: (ie. data/param) payloads of data used by the Reducer (Redux function); they're JS objects
    // Reducer: (ie. function) where the logic happens with the Action (ie. data); the Redux fxn that changes state; need a Reducer file for each type of state (ex. users, products).
    // Dispatch: (ie. event, like onClick) the event that triggers a Reducer (Redux fxn) to run 
    // Action types: string values for the Actions; helps Reducer decide which fxn to run on state
    // Action creator: function that creates the Action (ie. data) {action.type = "delete user" payload: id}
    // Redux thunk: function that returns another function 
    // mapStateToProps: from a React component, gives us access to Redux state
    // mapDispatchToProps: from a React component, gives us access to Redux Reducers (ie. functions) to change app-level state

// Important! Take step-by-step and console.log to ensure data is flowing correctly

/* Steps: 
Create repository on your computer to house project
In terminal in repository, install redux dependendies to start implementing redux:  npm i redux react-redux redux-thunk 
In App.js: import Provider component and wrap entire return in <Provider store={store}> tag so all nested components can access the app-level state in the Redux store
Create store.js file in src directory to hold application-level state. This should look similar across projects
Import store component into App.js file
Create reducer files in reducer folder: Create one reducer file (userReducer.js) for each data type (ex. users, products) and one rootReducer file (called index.js) which combines all reducers into one file.
Before completing the reducer file, can create actions folder with an actionTypes.js file (helps reducer decide what to do)
In userReducer.js, import actionTypes we just created so they can help us decide which function to run on action. Reducer defines an initial state and then uses a switch statement to decide what fxn to use (each case will return a new state). We created initialState and set up outline for switch.
Now we'll use thunk and action creators which are functions that create an action when user interacts with UI - Create userActions.js which includes dispatch which triggers Reducer to run
Go back to userReducer.js and fill in the case DELETE_USER in the switch stmt so that reducer knows what to do when it receives that specific action
Now we'll connect React components to Redux state with mapStateToProps so components can use state. To do this, Go to Users.js React component and add connect, mapStateToProps

Modify Redux state with React components with mapDispatchToProps



*/
