import React from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../images/logo.png'
import personicon from '../../../images/personicon.png'

const LoggedInView = props => {
  if (props.currentUser) {
    return (
        <Nav className="navbar navbar-custom navbar-fixed-top" expand="lg">
            <img id="logo" onClick = {(e) => props.changePage("Home")} src={logo} height="30"></img>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Item href="#deets">{props.currentUser}</Nav.Item>
                <img src={personicon} height="30" width="30"></img>
            </Nav>
        </Nav>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
        <LoggedInView changePage={this.props.handlePageChange} currentUser={this.props.currentUser} />
    );
  }
}

export default Header;