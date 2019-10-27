import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import erroricon from '../../images/erroricon.png';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress = (event) => {
    let field;
    if (event.key == "Tab"){
      if (this.state.field == "username") {
        field = "email";
      } else if (this.state.field == "email") {
        field = "password";
      }
      this.setState({
        field
      });
    }
  }

  handleFormClick(event) {
    this.setState({
      field: event.target.name,
    });
  }

  submitSignup(){
    let error = {
      email: "",
      password: "",  
    };
    if (this.state.hasAccount) {
      // if user + password does not match
      if (this.state.user.password === "111111") {
        error = this.state.error;
        error.password = "Wrong username/password combination.";
      }
    } else {
      if (this.state.user.email === "mike@yin") {
        error = this.state.error;
        error.email = "Email in use.";
      }
    }
    this.setState({
      error: error
    });
    return false;
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.error.email === "" && this.state.error.password === "") {
      // post, etc, etc. , update state and upwards loading, etc... (while in loading state, disable form fields)
      // check form errors here - email in use and wrong username password combo and update error field on form. 
      // can use a spinner button
      console.log(this.state.user);
    }
  }

  changeForm(){
    let error = {
      email: "",
      password: "",  
    }
    let user =  {
      name: "",
      email: "",
      password: ""
    };
    let field = ""
    this.setState({field, error, user, hasAccount: !this.state.hasAccount})
  }

  render() {
    let form;
    let emailError;
    let passwordError;
    let passwordErrorComponent;
    let emailErrorComponent;
    if (!this.state.hasAccount) {
      if (this.state.error.email) {
        emailError = "Error: " + this.state.error.email;
        emailErrorComponent = 
        <div><img id='erroricon2' src={erroricon}></img><b>{emailError}</b></div>
      }

      form = 
        <div className="loginbox" id="signup" onKeyDown={this.handleKeyPress}>
          <h1>Register for an Account</h1>
          <Form className="signupform" onSubmit={this.handleSubmit}>
            <Form.Group onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Your Name</Form.Label>
              <Form.Control value={this.state.user.name} required="required" name="username"/>
            </Form.Group>
            <Form.Group onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Email Address &nbsp;&nbsp;&nbsp;&nbsp;<span class='errorText2'>
                {emailErrorComponent}
              </span></Form.Label>
              <Form.Control value={this.state.user.email} required="required" type="email"  name="email"/>
            </Form.Group>
            <Form.Group onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Password (minimum 6 characters)</Form.Label>
              <Form.Control value={this.state.user.password} required="required" type="password"  pattern=".{6,}" name="password"/>
            </Form.Group>
            <div className="buttoncontainer">
              <Button variant="primary" type="submit" onClick={this.submitSignup}>
                Submit
              </Button>
            </div>
          </Form>
          <p>Have an account? <a href='#' onClick={this.changeForm}>Log in</a></p>
        </div>
    } else {
      if (this.state.error.password) {
        passwordError = "Error: " + this.state.error.password;
        passwordErrorComponent = 
        <div><img id='erroricon2' src={erroricon}></img><b>{passwordError}</b></div>
      }
      form = 
        <div className="loginbox" id="login" onKeyDown={this.handleKeyPress}>
          <h1>Login to Your Account</h1>
          <Form className="signupform" onSubmit={this.handleSubmit}>
            <Form.Group onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control value={this.state.user.email} type="email" name="email"/>
            </Form.Group>
            <Form.Group  onChange={this.handleChange} onClick={this.handleFormClick}>
              <Form.Label>Password &nbsp;&nbsp;&nbsp;&nbsp;<span class='errorText2'>
                {passwordErrorComponent}
              </span></Form.Label>
              <Form.Control value={this.state.user.password} type="password" name="password"/>
            </Form.Group>
            <div className="buttoncontainer">
              <Button variant="primary" type="submit" onClick={this.submitSignup}>
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