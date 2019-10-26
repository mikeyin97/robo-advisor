// client/src/App.js
import React, { Component } from "react";
import Header from "./Pages/PageComponents/Header";
import Sidebar from "./Pages/PageComponents/Sidebar";
import Content from "./Pages/PageComponents/Content";
import SignupForm from "./Login/SignupForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Josh Kang",
      page: "Analyzer",
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleSignIn() {
    this.setState({user: "Josh Kang"});
  }

  handleSignOut = async() => {
    const set = this.setState
    setTimeout(function(){
      set({user: null});
    }, 150);
  }

  handlePageChange(pageName){
    this.setState({page: pageName});
  }
  
  render() {
    if (this.state.user) {
      return <div id="app">
        <Header class="header-component" currentUser={this.state.user} handlePageChange={this.handlePageChange} ></Header>
        <Sidebar class="sidebar-component" handlePageChange={this.handlePageChange} handleSignOut={this.handleSignOut}></Sidebar>
        <Content class="content-component" handlePageChange={this.handlePageChange}
          page={this.state.page} 
          currentUser={this.state.user}>  
        </Content>
      </div>
    } else {
      return <div id="app">
        <SignupForm class="logsign"></SignupForm>
      </div>
    }
  }



}

export default App;

