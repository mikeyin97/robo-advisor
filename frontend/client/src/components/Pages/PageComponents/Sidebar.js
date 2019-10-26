import React from 'react';
import Button from 'react-bootstrap/Button';
import Homeicon from '../../../images/homeicon.svg'
import Analysisicon from '../../../images/analysisicon.png'
import Enhancericon from '../../../images/enhancericon.png'
import Buildericon from '../../../images/buildericon.png'
import Portfoliosicon from '../../../images/portfoliosicon.png'
import Logouticon from '../../../images/logouticon.png'

const Tab = (props) => {
    return (
        <Button className ="text-left nonlogout" onClick = {(e) => props.changePage(e, props.name)} block>
            <img class="iconimg" src={props.source} height="30" width="30"></img>
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
    this.props.handlePageChange(pageName);
  }

  render() {
    return (
        <div className="sidenav">
            <Tab name="Home" changePage={this.changePage} source={Homeicon}></Tab>
            <Tab name="Analyzer" changePage={this.changePage} source={Analysisicon}></Tab>
            <Tab name="Enhancer" changePage={this.changePage} source={Enhancericon} ></Tab>
            <Tab name="Builder" changePage={this.changePage} source={Buildericon}></Tab>
            <Tab name="My Portfolios" changePage={this.changePage} source={Portfoliosicon}></Tab>
            <Button className="text-left logout" onClick = {this.props.handleSignOut} block>
                <img src={Logouticon} height="30" width="30"></img>
                <p>Logout</p>
            </Button>
        </div>
    );
  }
}

export default Sidebar;