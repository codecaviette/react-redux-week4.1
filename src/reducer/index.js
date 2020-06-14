// This is the rootReducer which combines all data that's sent to it from other reducer files and combine into one file, which then gets fed to redux store

import { combineReducers } from 'redux';
import userReducer from './userReducer';

export default combineReducers({
    users: userReducer,             // Take note of key name, as you'll refer to it elsewhere in app. Here's where we'd put ALL of our reducers if have multiple. 
})