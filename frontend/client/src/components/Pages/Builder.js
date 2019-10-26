import React from 'react';
import Wholeform from './PageComponents/Wholeform'

class Builder extends React.Component {
  render() {
    let questions = [
      ['How much money are you willing to invest? (in $)'], 
      ['Until when do you want to invest?'],
      ['How much do you hope to get back from your investment? (in $)']
    ];
    return (
        <div class = "content builder">
          <h1>Builder</h1>
          <h4>We will build a portfolio for you based on your preferences!</h4>
          <Wholeform source="builder" hasStocks={false} questions={questions}></Wholeform>
          <div class = "footer"></div>
        </div>
    );
  }
}

export default Builder;