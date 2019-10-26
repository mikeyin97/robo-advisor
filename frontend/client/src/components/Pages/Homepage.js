import React from 'react';
import homeimage from '../../images/fintech.png'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
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
        <div class = "content homepage">
          <div class = "text">
            <h1>Getting Started</h1>
            <h4>Welcome to drainr, the one-stop shop for all your financial portfolio needs!</h4> 
            <h4>We offer several services as described below. </h4>
            <h2 onClick = {(e) => this.changePage(e, "Analyzer")} >Analyzer</h2>
            <h3>Input a portfolio and analyze it's risk and return over time.</h3>
            <h2 onClick = {(e) => this.changePage(e, "Enhancer")} >Enhancer</h2>
            <h3>Input a portfolio to get a better portfolio that dominates it.</h3>
            <h2 onClick = {(e) => this.changePage(e, "Builder")}>Builder</h2>
            <h3>Input your return target and preferred strategy to build a suitable portfolio.</h3>
            <h2 onClick = {(e) => this.changePage(e, "My Portfolios")}>My Portfolios</h2>
            <h3>View previous portfolios and analyses.</h3>
          </div>
          <div class = "image">
            <img class='homeimage' src={homeimage}></img>
          </div>
        </div>
          
    );
  }
}

export default Homepage;