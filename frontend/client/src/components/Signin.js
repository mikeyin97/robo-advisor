// client/src/App.js
import React, { Component } from "react";
import Header from "./Pages/PageComponents/Header";
import Sidebar from "./Pages/PageComponents/Sidebar";
import Content from "./Pages/PageComponents/Content";
import SignupForm from "./Login/SignupForm";
import { withRouter, Redirect, Route } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(name) {
    this.setState({name: name});
  }

  render() {
    if (this.state.name) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { name: this.state.name }
      }} />
      );
    } else {
      return (<div id="app">
        <SignupForm class="logsign" handleSignIn={this.handleSignIn}></SignupForm>
      </div>);
    }
  }
}

export default withRouter(App);

