import React from 'react';
import Button from 'react-bootstrap/Button';

const Tab = (props) => {
    return (
        <Button className ="text-left nonlogout" href="/" block>
            <img src="placeholder" height="30" width="30"></img>
            <p>{props.name}</p>
        </Button>
    );
};

class Sidebar extends React.Component {
  render() {
    return (
        <div class="sidenav">
            <Tab name="Home"></Tab>
            <Tab name="Analyzer"></Tab>
            <Tab name="Enhancer"></Tab>
            <Tab name="Builder"></Tab>
            <Tab name="My Portfolios"></Tab>
            <Button className="text-left logout" href="/" block>
                <img src="placeholder" height="30" width="30"></img>
                <p>Logout</p>
            </Button>
        </div>
    );
  }
}

export default Sidebar;