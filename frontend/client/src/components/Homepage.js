import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
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
        <div class = "homepage">
          <h1>Getting Started</h1>
          <h3>Welcome to drainr, the one-stop shop for all your financial portfolio needs. We offer several services described below. </h3>
          <h2 onClick = {(e) => this.changePage(e, "Analyzer")} >Analyzer</h2>
          <h3>Input a portfolio and analyze it's risk and return over time.</h3>
          <h2 onClick = {(e) => this.changePage(e, "Enhancer")} >Enhancer</h2>
          <h3>Input a portfolio to get a better portfolio that dominates it.</h3>
          <h2 onClick = {(e) => this.changePage(e, "Builder")}>Builder</h2>
          <h3>Input your return target and preferred strategy to build a suitable portfolio.</h3>
          <h2 onClick = {(e) => this.changePage(e, "My Portfolios")}>My Portfolios</h2>
          <h3>View previous portfolios and analyses.</h3>
        </div>
          
    );
  }
}

export default Homepage;