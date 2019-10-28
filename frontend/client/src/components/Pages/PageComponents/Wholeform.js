import React from 'react';
import Button from 'react-bootstrap/Button';
import Formunit from './Formunit';
import Questionunit from './Questionunit';
import Graph from './Graph';
import erroricon from '../../../images/erroricon.png';

class Wholeform extends React.Component {
  constructor(props) {
    super(props);

    let questionFields = [];
    for (var j = 0; j < props.questions.length; j++) {
      let question = this.props.questions[j][0];
      let format = this.props.questions[j][1];
      questionFields.push({question: question, format: format, value: ''})
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
      error: '',
      loading: false,
      showGraph: false,
      action: "Submit",
    };

    this.addFormField = this.addFormField.bind(this);
    this.delFormField = this.delFormField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.validateFormFields = this.validateFormFields.bind(this);
    this.validateQuestionFields = this.validateQuestionFields.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleFormChange(event, id){
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

  validateFormFields(formFields){
    let error;
    if (formFields.length === 0) {
      error = 'Error: Please input at least one stock.';
    }
    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].value === '') {
        error = 'Error: Stock holdings cannot be empty.';
      }
      if (isNaN(formFields[i].value)) {
        error = 'Error: Stock holdings must be a numeric value';
      }
      if (formFields[i].stock === '') {
        error = 'Error: Please select a valid stock name.';
      }
    }
    this.setState({
      error
    });
    return error;
  }

  validateQuestionFields(quesFields){
    let error;
    let monthConvert = {
      1: "01",
      2: "02", 
      3: "03", 
      4: "04", 
      5: "05", 
      6: "06", 
      7: "07", 
      8: "08", 
      9: "09", 
      10: "10", 
      11: "11",
      12: "12",
    };
    for (let i = 0; i < quesFields.length; i++) {
      if (!quesFields[i].value.match(quesFields[i].format)) {
        error = 'Error: Please answer the questions with the requested formats';
      } else {
        if (quesFields[i].format === '(0[1-9]|10|11|12)/[0-9]{4}$') {
          let month = quesFields[i].value.slice(0,2);
          let year = quesFields[i].value.slice(3,7);
          var d = new Date();
          var n = d.getMonth();
          var y = d.getFullYear();

          let currDate = y.toString() + monthConvert[n];
          let newDate = year + month;
          console.log(newDate, currDate)
          if (newDate <= currDate) {
            error = 'Error: Please input a future date.';
          }
        } 
      }
    }
    this.setState({
      error
    });
    return error;
  }
 
  submitForm() {
    // check for errors and stuff here (valid inputs)
    const formFields = this.state.formFields;
    const quesFields = this.state.questionFields;
    
    // post the thing underneath, wait for loading, then update graph I guess
    // I should prob update the submit from based on whether it was submitted or nah - first time is submit,
    // then change to update when this is called. 
    
    let error1;
    let error2; 
    if (this.props.hasStocks) {
      error1 = this.validateFormFields(formFields);
    }
    if (error1) {
      return
    }

    error2 = this.validateQuestionFields(quesFields);
    if (error2) {
      return
    }
    
    let set = this.setState;
    if (!error1 && !error2) {
      this.setState({
        loading: true,
        showGraph: true,
        action: "Update",
        error: '',
      });
      // change this timeout to waiting for response
      setTimeout(function(){
        set({
          loading: false,
        });
      }, 1000);
    }


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

    let errorText;
    if (this.state.error !== '') {
      errorText = 
        <div class="alert alert-danger" role="alert">
          <p><img id="erroricon" src={erroricon}></img>{this.state.error}</p>
        </div>
        
    }

    let graph;
    if (this.state.showGraph) {
      graph = 
        <Graph loading={this.state.loading} source={this.props.source}></Graph>
    }

    let formSpace;
    if (this.props.source !== 'analyzer'){
      formSpace = 
        <div class = "formbreak"></div>
    }

    return (
      <div>
       
        <div class = "wholeform">
          {graph}
          {stockForm}

          {formSpace}

          <div class = "quesfields">
            {quesItems}
          </div>
          <div class = "errorText">
            {errorText}
          </div>
          
          <Button variant="form-submit" type="button" onClick={this.submitForm}>
            {this.state.action}
          </Button>
        </div>    
      </div>      
    );
  }
}

export default Wholeform;