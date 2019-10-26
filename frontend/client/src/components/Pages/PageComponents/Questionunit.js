import React from 'react';

class Questionunit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let question = this.props.question.question;
    let value = this.props.question.value;
    return (
      <div class = "quesform">
        <div class = "questiontext">
          <p class = "question">{question}</p>
        </div>
        <div class = "questionresponse">
          <div class="form-group">
            <input value={value} name="questionField" class="form-control question-form" onChange={(e) => this.props.handleFormChange(e, question)}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Questionunit;
