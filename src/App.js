import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import User from "./Users";
import { Provider } from 'react-redux';
import store from './store';     // store file is not capitalized bc it's not a React component, just js

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>    {/* Wraps around entire return statement. Need store prop (lowercase!), which we're importing from store file */}  
      <div className="App">
        <header className="App-header">
          <h1>Form State, Spread Syntax, Ternary Operator</h1>
        </header>
        <AddUser  />
        <hr />
        <User  />
      </div>
      </Provider>
    );
  }
}

export default App;
