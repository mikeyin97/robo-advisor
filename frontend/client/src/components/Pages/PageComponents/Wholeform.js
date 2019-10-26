import React from 'react';
import Button from 'react-bootstrap/Button';
import Formunit from './Formunit';
import Questionunit from './Questionunit';

class Wholeform extends React.Component {
  constructor(props) {
    super(props);

    let questionFields = [];
    for (var j = 0; j < props.questions.length; j++) {
      let question = this.props.questions[j][0];
      questionFields.push({question: question, value: ''})
    }

    this.state = {
      formFields: [
        {
          id: 1,
          stock: '',
          value: '',
        }
      ],
      questionFields: questionFields,
      currId: 1,
    };

    this.addFormField = this.addFormField.bind(this);
    this.delFormField = this.delFormField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event, id){
    console.log(id);
    let formFields = this.state.formFields;
    let questionFields = this.state.questionFields;
    let field = event.target.name;
    let foundIndex;
    let formField;
    let questionField;

    if (field === "stockField") {
      foundIndex = formFields.findIndex(x => x.id == id);
      formField = formFields[foundIndex];
      formField.stock = event.target.value;
      formFields[foundIndex] = formField;
    } else if (field === "valueField") {
      foundIndex = formFields.findIndex(x => x.id == id);
      formField = formFields[foundIndex];
      formField.value = event.target.value;
      formFields[foundIndex] = formField;
    } else if (field === "questionField") {
      foundIndex = questionFields.findIndex(x => x.question == id);
      questionField = questionFields[foundIndex];
      questionField.value = event.target.value;
      questionFields[foundIndex] = questionField;
    } 

    this.setState({
      formFields,
      questionFields
    });
  }

  addFormField() {
    let currId = this.state.currId + 1;
    let formFields = this.state.formFields;
    formFields.push({
      id: currId,
      stock: '',
      value: '',
    })
    this.setState({
      formFields,
      currId
    });
  }

  delFormField(id) {
    let formFields = this.state.formFields;
    formFields.splice(formFields.findIndex(function(i){
      return i.id === id;
    }), 1);
    this.setState({
      formFields
    })
  }

  submitForm() {
    const formFields = this.state.formFields;
    const quesFields = this.state.questionFields;
    // submit

    console.log({
      formFields, 
      quesFields,
    })
  }

  render() {
    let stockItems = [];
    for (let i = 0; i < this.state.formFields.length; i++) {
      stockItems.push(
        <Formunit 
          fieldData={this.state.formFields[i]} 
          delField={this.delFormField}
          handleFormChange={this.handleFormChange}>
        </Formunit>
      )
    }

    let stockForm; 
    if (this.props.hasStocks) {
      stockForm = 
      <div class = "portform">
        <div class = "formheader">
          <p class = "name">Stock Name</p>
          <p class = "holdings">Stock Holdings ($)</p>
        </div>
        <div class = "formfields">
          {stockItems}
        </div>
        <div class = "formfooter">
            <Button onClick={this.addFormField} variant="add" type="button">
              <p>Add</p>
            </Button>
        </div>
      </div>
    }

    let quesItems = [];
    for (let j = 0; j < this.state.questionFields.length; j++) {
      quesItems.push(
        <Questionunit 
          question={this.state.questionFields[j]}
          handleFormChange={this.handleFormChange}>
        </Questionunit>
      )
    }

    return (
      <div class = "wholeform">
        {stockForm}

        <div class = "formbreak">
        </div>

        <div class = "quesfields">
          {quesItems}
        </div>

        <Button variant="form-submit" type="button" onClick={this.submitForm}>
          Submit
        </Button>
      </div>          
    );
  }
}

export default Wholeform;