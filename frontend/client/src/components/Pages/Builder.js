import React from 'react';
import Wholeform from './PageComponents/Wholeform'

class Builder extends React.Component {
  render() {
    let questions = [
      ['How much money are you willing to invest? (in $)', '\\d+\\.?\\d*'], 
      ['Until when do you want to invest? (MM/YYYY)', '(0[1-9]|10|11|12)/[0-9]{4}$'],
      ['How much do you hope to get back from your investment? (in $)', '\\d+\\.?\\d*']
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