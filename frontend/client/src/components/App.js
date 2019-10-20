// client/src/App.js
import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SignupForm from "./SignupForm";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      hasAccount: false,
    };
  }

  handleSignIn() {
    this.setState({user:"HI"});
  }
  
  render() {
    if (this.state.user) {
      return <div id="app">
        <Header class="header-component" currentUser={this.state.user}></Header>
        <Sidebar class="sidebar-component"></Sidebar>
      </div>
    } else {
      return <div id="app">
        <SignupForm class="logsign" hasAccount={this.state.hasAccount}></SignupForm>
      </div>
    }
  }



}

export default App;

