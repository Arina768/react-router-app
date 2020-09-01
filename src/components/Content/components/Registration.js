import React, {Component} from "react";


export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      registrationSucceed:''
    }
  }

  changeEmail = ({target}) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(target.value)) {
      target.style.border = '2px solid green';
      this.setState({
        email: target.value,
      })
    } else {
      target.style.border = '2px solid red';
      this.setState({
        error: true
      })
    }
  };

  changePassword = ({target}) => {
    this.setState({
      password: target.value,
    })
  };

  confirmPassword = ({target}) => {
    if (target.value !== this.state.password) {
      target.style.border = '2px solid red';
      this.setState({
        error: true
      })
    } else {
      target.style.border = '2px solid green';
      this.setState({
        error: false
      })
    }
  };

  createAccount = () => {
    if (!this.state.error) {
      localStorage.setItem(this.state.email, this.state.password);
      this.setState({
        registrationSucceed: "Account successfully created!",
      })
    } else {
      this.setState({
        registrationSucceed: "Something went wrong. Please check your email and password and try again",
      })
    }
  };

  render() {
    return (
      <div className='center'>
        <h1> Registration </h1>
          <input placeholder='Email' onChange={this.changeEmail}/>
          <input placeholder='Password' type='password' onChange={this.changePassword}/>
          <input placeholder='Confirm password' type='password' onChange={this.confirmPassword}/>
          <p className={'registrationSucceed'}>{this.state.registrationSucceed}</p>
          <button type='submit' onClick={this.createAccount}> Create account</button>
      </div>
    )
  }
}