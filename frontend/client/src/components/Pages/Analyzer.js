import React from 'react';
import Wholeform from './PageComponents/Wholeform'

class Analyzer extends React.Component {
  render() {
    return (
        <div class = "content analyzer">
          <h1>Analyzer</h1>
          <h4>Input your portfolio and let us analyze its risk and return!</h4>
          <Wholeform></Wholeform>
        </div>  
    );
  }
}

export default Analyzer;