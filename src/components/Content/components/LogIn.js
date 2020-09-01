import React, {Component} from "react";
import {Link} from "react-router-dom";


export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      loginError: ''
    };
  };

  enterEmail = ({target}) => {
    this.setState({
      email: target.value,
    });
  };

  enterPassword = ({target}) => {
    this.setState({
      password: target.value,
    });
  };

  logIn = (event) => {
    const password = localStorage.getItem(this.state.email);
    if (password !== this.state.password) {
      event.preventDefault();
      this.setState({
        loginError: 'Invalid Username or Password'
      });
    }
  };

  render() {
    return (
      <div className='center'>
        <h1 className='logIn'> Log in </h1>
        <input placeholder='Email' onChange={this.enterEmail}/>
        <input placeholder='Password' type='password' onChange={this.enterPassword}/>
        <p>{this.state.loginError}</p>
        <Link to="/home">
          <button onClick={this.logIn}>Log in</button>
        </Link>
      </div>
    )
  }

}