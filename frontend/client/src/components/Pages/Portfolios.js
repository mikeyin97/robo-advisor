import React from 'react';

class Portfolios extends React.Component {
  render() {
    return (
        <div class = "content">
          <h1>My Portfolios</h1>
          <h4>Your previously created portfolios are listed below. </h4>
          <div class = "wholeform">
          <div class = "quesform">
            <div class = "questiontext">
              <p class = "question">hi</p>
            </div>
            <div class = "questionresponse">
              <div class="form-group">
                <input value={''} name="questionField" class="form-control question-form"></input>
              </div>
            </div>
        </div>
          <div class = "footer"></div>
        </div>
        </div>    
          
    );
  }
}

export default Portfolios;