// Like a switch statement that evaluates which function it needs to run
// actionType is like a function name

import { DELETE_USER , ADD_USER } from '../actions/actionTypes';

// Initial State
const initialState = {
    users: [
        {
            name: "Aaron",
            id: 1,
        },
        {
            name: "Jamie",
            id: 2,
        }
    ]
}

export default function (state = initialState, action) {
    switch(action.type){
        case DELETE_USER:               // If we receive the DELETE_USER string, then...
            let filteredArray = state.users.filter((user) => {       // Use map, filter, reduce so that a NEW array is created 
                if(user.id != action.payload) {
                    return user;
                }
            });    
            return {
                ...state,               // Bring in everything from current state
                users: filteredArray,
            };
        case ADD_USER:
            return {            // Must use array method to create NEW array
                ...state,
                users: action.payload 
            }                 
        

        default:                    //This is a fail-safe, likely won't need it tho.
            return state;
    }
}

