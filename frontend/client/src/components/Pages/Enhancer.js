import React from 'react';
import Wholeform from './PageComponents/Wholeform'

class Enhancer extends React.Component {
  render() {
    return (
        <div class = "content enhancer">
          <h1>Enhancer</h1>
          <h4>Input a portfolio and we'll generate a better one!</h4>
          <Wholeform></Wholeform>
        </div>
          
    );
  }
}

export default Enhancer;