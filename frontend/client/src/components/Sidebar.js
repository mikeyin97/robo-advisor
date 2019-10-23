import React from 'react';
import Button from 'react-bootstrap/Button';

const Tab = (props) => {
    return (
        <Button className ="text-left nonlogout" onClick = {(e) => props.changePage(e, props.name)} block>
            <img src="../images/logo.png" height="30" width="30"></img>
            <p>{props.name}</p>
        </Button>
    );
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home"
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(event, pageName) {
    this.setState({
      page: pageName
    });
    console.log(pageName);
    this.props.handlePageChange(pageName);
  }

  render() {
    return (
        <div className="sidenav">
            <Tab name="Home" changePage={this.changePage}></Tab>
            <Tab name="Analyzer" changePage={this.changePage}></Tab>
            <Tab name="Enhancer" changePage={this.changePage}></Tab>
            <Tab name="Builder" changePage={this.changePage}></Tab>
            <Tab name="My Portfolios" changePage={this.changePage}></Tab>
            <Button className="text-left logout" onClick = {this.props.handleSignOut} block>
                <img src="placeholder" height="30" width="30"></img>
                <p>Logout</p>
            </Button>
        </div>
    );
  }
}

export default Sidebar;