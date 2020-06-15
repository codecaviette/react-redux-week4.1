// This Reducer is like a switch statement that evaluates which function it needs to run depending on action type
// actionType is like a function name

import { DELETE_USER , ADD_USER } from '../actions/actionTypes';

// Initial state:
const initialState = {
    users: [
        {
            name: "Jenny",
            id: 1,
        },
        {
            name: "Diana",
            id: 2,
        }
    ]
}

// Switch statement: This will do some logic to determine which function Reducer needs to run depending on action type
export default function (state = initialState, action) {            // Params are state and action. By default, can initialize state as initialState if we don't pass any state param, which is what we want.
    switch(action.type){                                            // Action type will determine which function/case is run (action is a param/placeholder) 

        case DELETE_USER:                                           // 1st case: If we receive the DELETE_USER string (which we already set equal to DELETE_USER variable in actionTypes.js), then do this...
            let filteredArray = state.users.filter((user) => {      // Must use an array method (map, filter, reduce) so a NEW array is created. Use filter to only include users whose IDs do NOT match the id received 
                if(user.id != action.payload) {
                    return user;
                }
            });    
            return {
                ...state,               // This brings in everything from current state - useful for when you have other pieces of state (ex. products) not being edited by filteredArray which is only editing users array 
                users: filteredArray,   // Returns a NEW array for existing state called users that only includes users with IDs that do NOT match the one from dispatch.
            };

        case ADD_USER:
            return {                    // Must use an array method to create NEW array
                ...state,
                users: action.payload 
            }                 
        
        default:                        //This is a fail-safe, likely won't need it bc the incoming action (ie. data) should fit one of the above cases.
            return state;
    }
}

