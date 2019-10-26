import React from 'react';
import Wholeform from './PageComponents/Wholeform'

class Enhancer extends React.Component {
  render() {
    let questions = [
      ['What\'s the maximum number of stocks you want in your portfolio? (between 1 to 100)'], 
      ['Until when do you want to hold this portfolio (MM/YY)?'] ];
    return (
        <div class = "content enhancer">
          <h1>Enhancer</h1>
          <h4>Input a portfolio and we'll generate a better one!</h4>
          <Wholeform source="enhancer" hasStocks={true} questions={questions}></Wholeform>
          <div class = "footer"></div>
        </div>  
    );
  }
}

export default Enhancer;