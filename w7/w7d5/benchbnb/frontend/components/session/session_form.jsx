import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.redirect();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    let action;
    if (this.props.formType === 'signup') {
      action = () => this.props.signup(user);
    } else {
      action = () => this.props.login(user);
    }
    action();
  }

  updateUser(key) {
    return (event) => this.setState({[key]: event.target.value});
  }

  redirect() {
    this.props.router.push('/');
  }

  render() {
    let header;
    if (this.props.formType === 'signup') {
      header = <div>
        <h1>SIGN UP</h1>
        <Link to={`/login`}>Log In</Link>
      </div>;

    } else {
      header = <div>
        <h1>LOG IN</h1>
        <Link to={`/signup`}>Sign Up</Link>
      </div>;
    }

    let errorList = this.props.errors.map( (error,idx) => (
       <li key={idx}> {error} </li>
    ));

    return(
      <div>
        { header }
        <Link to="/" />
        { errorList }
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.updateUser('username')}/>
          <input type="text" value={this.state.password} onChange={this.updateUser('password')}/>
          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
