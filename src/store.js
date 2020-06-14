// This is where our state will live; code is not changed much
// File name is NOT capitalized bc it's not a React component, just js

import { createStore, applyMiddleware, compose } from 'redux';      // These basically make your redux work. applyMiddleware: dispatch actions, compose: brings in middleware and any other third party apps
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};
const middleware = [thunk];      //Allows us to create actions and dispatch at the same time

// takes: rootReducer, initialState, middleware
const store = createStore(
    rootReducer, initialState, compose(
        applyMiddleware(...middleware),             // Pass middleware variable defined above
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()         // To use these, need to have Redux dev tool enabled in Chrome. Help debug 
    )
);

export default store;




// Actions: (ie. data/param) payloads of data used by the reducer. they're JS objects. the data the redux function uses

// Reducer: (ie. function) where the logic happens with the action. the redux fxn that changes state. need a reducer file for each type of state (ex. users, products).

// Dispatch: (ie. event, like onClick) the event that triggers a redux fxn to run 

// Action types: string values for the actions. helps decide which fxn to run on state

// Action creator: function that creates the action {action.type = "delete user" payload: id}

// Redux thunk: fucntion that is returned by another function 

// mapStateToProps: get state from Redux in our component

// mapDispatchToProps: give React components access to Redux functions


