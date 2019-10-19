import React from 'react';
import Nav from 'react-bootstrap/Nav';

const LoggedInView = props => {
  if (props.currentUser) {
    return (
        <Nav className="navbar navbar-custom navbar-fixed-top" expand="lg">
            <img src="placeholder" height="30" width="30"></img>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Item href="#deets">{props.currentUser}</Nav.Item>
                <img src="placeholder" height="30" width="30"></img>
            </Nav>
        </Nav>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
        <LoggedInView currentUser={this.props.currentUser} />
    );
  }
}

export default Header;