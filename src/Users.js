import React, { Component } from "react";
import { connect } from 'react-redux';                // connects React component to Redux store
import { deleteUser } from './actions/userActions';

class Users extends Component {
  render() {
    let userJsx =
      this.props.reduxUserState && this.props.reduxUserState.length > 0 ? (     // this.props.reduxUserState is the Redux state passed as a prop via mapStateToProps below
        this.props.reduxUserState.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteUser(user.id)}                    // deleteUser fxn is the Redux thunk from userActions.js
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

// connect (below): connects React component to Redux store
  // 1st parenthesis (either argument can be null if it's not needed): 
    // 1st argument mapStateToProps - gives this React component access to Redux state / data
    // 2nd argument mapDispatchToProps - gives this React component access to Redux Reducers (ie. functions) that change the Redux state
  // 2nd parenthesis: this component's name

const mapStateToProps = (state) => ({           // This fxn gives this component access to state from Redux store, which we can then use as a prop above (this.props.reduxUserState)
  reduxUserState: state.users.users,            // Key value is set to the flow of state: state from store.js, 1st users from index.js (combines all reducers), 2nd users from userReducer.js
});

export default connect (mapStateToProps, {deleteUser}) (Users);      // Can insert null for whichever argument in first () that you do not need from Redux
