// This creates the action/object to use in reducer

import { DELETE_USER } from './actionTypes';

export function deleteUser(id){
    return function(dispatch) {
        dispatch({                      // This creates an action (ie. data)
            type: DELETE_USER,          // Best practice to name keys type and payload to keep consistent across app
            payload: id
        })
    }
} 

// Don't export default anything because we have multiple functions