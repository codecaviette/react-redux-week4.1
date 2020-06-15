// This creates the ACTION (ie. data/object) to use in Reducer. We'll write Action Creators and use Redux thunks.
// An action creator is a function that returns an action (an object with an action type and payload)
// The thunk is a function that returns another function; it's what allows us to call dispatch and do any asynchronous requests as needed

import { DELETE_USER } from './actionTypes';

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





// Don't export default anything because we have multiple functions within this file. When importing these functions (that create objects/data) 
// into other files, you'll need to specify which function by surrounding with {}  