// This is the rootReducer which combines all data that's sent to it from other reducer files and combine into one file, which then gets fed to redux store

import { combineReducers } from 'redux';
import userReducer from './userReducer';

export default combineReducers({    // Here's where we'd put ALL of our reducers if have multiple. 
    users: userReducer,             // Key name should make sense. In this case, it should be something like "users" since the reducer is "userReducer". Take note of key name, as you'll refer to it elsewhere in app. 
})