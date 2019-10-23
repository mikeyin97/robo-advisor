import React from 'react';
import Homepage from "./Homepage";
import Analyzer from "./Analyzer";
import Enhancer from "./Enhancer";
import Builder from "./Builder";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let content;
    if (this.props.page === "Home") {
      content = <Homepage handlePageChange={this.props.handlePageChange}></Homepage>
    } else if (this.props.page == "Analyzer") {
      content = <Analyzer></Analyzer>
    } else if (this.props.page == "Enhancer") {
      content = <Enhancer></Enhancer>
    } else if (this.props.page == "Builder") {
      content = <Builder></Builder>
    } 

    return (
        <div class = "mainContent">
          {content}          
        </div>  
    );
  }
}

export default Content;