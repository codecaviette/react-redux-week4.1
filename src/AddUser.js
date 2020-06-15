import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser} from './actions/userActions';

export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      id: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUser({                // This was updated from this.props.add (React) to Redux reducer fxn (from userActions.js). This reducer fxn 
      name: this.state.userName,        // takes a param of userData which is defined here in the {} as an object with name and id keys.         
      id: this.state.id,                // This object's key names (name and id) need to match the key names in the existing object array that this new 
    });                                 // object is being added to (defined in userReducer.js)

    this.setState({
      userName: "",
      id: "",
    });
  }

  render() {
    return (
      <form className="container my-5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="user name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="id"
            name="id"
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}


// connect (below): connects React component to Redux store
  // 1st parenthesis (either argument can be null if it's not needed): 
    // 1st argument mapStateToProps - gives this React component access to Redux state / data
    // 2nd argument mapDispatchToProps - gives this React component access to Redux Reducers (ie. functions) that change the Redux state
  // 2nd parenthesis: this component's name

export default connect (null , {addUser}) (AddUser);           // Since we do not need the app-level state in this component, 1st position in 1st () will be null; 
                                                               // 2nd position is Redux reducer from userActions.js which can be used in this component's props

