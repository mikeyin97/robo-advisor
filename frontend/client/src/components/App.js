// client/src/App.js
import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


class App extends Component {
  render() {
    return <div id="app">
      <Header class="header-component" currentUser="Josh Kang"></Header>
      <Sidebar class="sidebar-component"></Sidebar>
    </div>;
  }



}

export default App;

