import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo.png';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {
        email: "",
        password: "",  
      },
      user: {
        name: "",
        email: "",
        password: ""
      },
      hasAccount: false,
      field: "",
    };

    this.changeForm = this.changeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  handleChange(event) {
    const field = this.state.field;
    let user = this.state.user;
    
    if (field === "username") {
      user.name = event.target.value;
    } else if (field === "password") {
      user.password = event.target.value;
    } else if (field === "email") {
      user.email = event.target.value;
    }
    
    this.setState({
      user
    });
  }

  handleFormClick(event) {
    this.setState({
      field: event.target.name,
    });
  }

  submitSignup(){
    // add to db, update state and upwards loading, etc... (while in loading state, disable form fields)
    const a = false;
    if (a) {
      console.log(this.state.user)
    } else {
      let error = this.state.error
      error.email = "Email in use"
      this.setState({
        error: error
      });
    }
    return false;
  }

  changeForm(){
    this.setState({hasAccount: !this.state.hasAccount})
  }

  render() {
    let form;
    let emailError;
    let passwordError;
    if (!this.state.hasAccount) {
      if (this.state.error.email) {
        emailError = "Error: " + this.state.error.email;
      }
      console.log(emailError)
      form = 
        <div className="loginbox" id="signup">
          <h1>Register for an Account</h1>
          <Form className="signupform" >
            <Form.Group value={this.state.username} onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Your Name</Form.Label>
              <Form.Control required="required" name="username"/>
            </Form.Group>
            <Form.Group value={this.state.email} onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Email Address &nbsp;&nbsp;&nbsp;&nbsp;<span class='errorText'><b>{emailError}</b></span></Form.Label>
              <Form.Control required="required" type="email"  name="email"/>
            </Form.Group>
            <Form.Group value={this.state.password} onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Password (minimum 6 characters)</Form.Label>
              <Form.Control required="required" type="password" name="password" pattern=".{6,}"/>
            </Form.Group>
            <div className="buttoncontainer">
              <Button variant="primary" type="button" onClick={this.submitSignup}>
                Submit
              </Button>
            </div>
          </Form>
          <p>Have an account? <a href='#' onClick={this.changeForm}>Log in</a></p>
        </div>
    } else {
      if (this.state.error.password) {
        passwordError = "Error: " + this.state.error.password;
      }
      form = 
        <div className="loginbox" id="login">
          <h1>Login to Your Account</h1>
          <Form className="signupform" onSubmit={this.subbmitSignup}>
            <Form.Group value={this.state.email} onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email"/>
            </Form.Group>
            <Form.Group value={this.state.password} onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Password &nbsp;&nbsp;&nbsp;&nbsp;<span class='errorText'><b>{passwordError}</b></span></Form.Label>
              <Form.Control type="password" name="password"/>
            </Form.Group>
            <div className="buttoncontainer">
              <Button variant="primary" type="button" onClick={this.submitSignup}>
                Submit
              </Button>
            </div>
          </Form>
          <p>Need an account? <a href='#' onClick={this.changeForm}>Sign up</a></p>
        </div>
    }
    return (
      <div className='signinbackground'>
        <img id='logo' src={logo}></img>
        {form}
      </div>
    );
  }
};

export default SignupForm;