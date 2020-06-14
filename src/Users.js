import React, { Component } from "react";
import { connect } from 'react-redux';      // connects React component to Redux store
import { deleteUser } from './actions/userActions';

class Users extends Component {
  render() {
    let userJsx =
      this.props.reduxUserState && this.props.reduxUserState.length > 0 ? (
        this.props.reduxUserState.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteUser(user.id)}
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

// connect
  // 1st parenthesis: 
    // 1st argument mapStateToProps - get your redux state / data
    // 2nd argument mapDispatchToProps - get your functions that can change the redux state
  // 2nd parenthesis: your component name

const mapStateToProps = (state) => ({           // This gives us access to state in state store
  reduxUserState: state.users.users,            // state from store.js, 1st users from index.js, 2nd users from userReducer.js
});

export default connect (mapStateToProps, {deleteUser}) (Users);      // Can insert null for whichever argument in first () that you are not looking for
