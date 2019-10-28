// client/src/App.js
import React, { Component } from "react";
import Header from "./Pages/PageComponents/Header";
import Sidebar from "./Pages/PageComponents/Sidebar";
import Content from "./Pages/PageComponents/Content";
import { Redirect, withRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
      signedOut: false,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleSignOut = async() => {
    const set = this.setState
    setTimeout(function(){
      set({signedOut: true});
    }, 150);
  }

  handlePageChange(pageName){
    this.setState({page: pageName});
  }
  
  render() {
    if ((((this.props || {}).location|| {}).state || {}).name && !this.state.signedOut) {
      return <div id="app">
        <Header class="header-component" currentUser={this.props.location.state.name} handlePageChange={this.handlePageChange} ></Header>
        <Sidebar class="sidebar-component" handlePageChange={this.handlePageChange} handleSignOut={this.handleSignOut}></Sidebar>
        <Content class="content-component" handlePageChange={this.handlePageChange}
          page={this.state.page} 
          currentUser={this.props.name}>  
        </Content>
      </div>
    } else {
      return <div id="app">
        <Redirect to='/signin' />
      </div>
    }
  }
}

export default withRouter(App);

