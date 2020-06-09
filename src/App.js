import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import User from "./Users";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Aaron",
          id: 1,
        },
        {
          name: "Jamie",
          id: 2,
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  }

  addUser(userData) {
    this.setState({
      users: [...this.state.users, userData],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Form State, Spread Syntax, Ternary Operator</h1>
        </header>
        <AddUser add={this.addUser.bind(this)} />
        <hr />
        <User userArray={this.state.users} delete={this.deleteUser} />
      </div>
    );
  }
}

export default App;
