// This creates the ACTION (ie. data/object) to use in Reducer. We'll write Action Creators and use Redux thunks.
// An action creator is a function that returns an action (an object with an action type and payload)
// The thunk is a function that returns another function; it's what allows us to call dispatch and do any asynchronous requests as needed

import { DELETE_USER , ADD_USER} from './actionTypes';

// This is the ACTION creator (fxn that returns another fxn which makes an object)
export function deleteUser(id){
    // This is the thunk
    return function(dispatch) {         
        dispatch({                      // dispatch is the event that triggers a Reducer (Redux fxn) to run 
            type: DELETE_USER,          // Best practice to name keys "type" and "payload" to keep consistent across app. Payload is the data
            payload: id
        })
    }
} 

// Creates an action 
export function addUser(userData) {     // userData is a param/placeholder; it will be the object coming from form (in AddUser.js)
    return function(dispatch){
        dispatch({
            type: ADD_USER,
            payload: userData           // This action's payload (action.payload) will be used in case ADD_USER in userReducer.js
        })
    }
}





// Don't export default anything because we have multiple functions within this file. When importing these functions (that create objects/data) 
// into other files, you'll need to specify which function by surrounding with {}  