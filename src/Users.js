import React, { Component } from "react";

export class Users extends Component {
  render() {
    let userJsx =
      this.props.userArray && this.props.userArray.length > 0 ? (
        this.props.userArray.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn btn-danger"
              onClick={() => this.props.delete(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No users exist</p>
      );
    // if(this.props.userArray) {

    // } else {   }

    // (this.props.userArray) IF return statement ELSE

    return (
      <div>
        <h2>Users</h2>

        <div className="container">
          <div className="row">{userJsx}</div>
        </div>
      </div>
    );
  }
}

export default Users;
