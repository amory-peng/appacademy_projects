import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }

  handleClick() {
    console.log("logout");
    this.props.logout();
  }

  render() {
    console.log("render", this.props);
    if (this.props.currentUser) {
      return(
        <div>
          <h1>Hi {this.props.currentUser.username}</h1>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      );
    }
    return(
      <div>
        <h1>not signed in</h1>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    );
  }
}


export default Greeting;
