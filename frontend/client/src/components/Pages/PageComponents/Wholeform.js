import React from 'react';
import Button from 'react-bootstrap/Button';
import Formunit from './Formunit';

class Wholeform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: [
        {
          id: 1,
          stock: '',
          value: '',
        }
      ],
      currId: 1,
    };

    this.addFormField = this.addFormField.bind(this);
    this.delFormField = this.delFormField.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event, id){
    let formFields = this.state.formFields;
    let field = event.target.name;

    let foundIndex = formFields.findIndex(x => x.id == id);
    let formField = formFields[foundIndex];
    
    if (field === "stockField") {
      formField.stock = event.target.value;
    } else if (field === "valueField") {
      formField.value = event.target.value;
    } 

    formFields[foundIndex] = formField;

    this.setState({
      formFields
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
    console.log(id);
    let formFields = this.state.formFields;
    formFields.splice(formFields.findIndex(function(i){
      return i.id === id;
    }), 1);
    console.log(formFields);
    this.setState({
      formFields
    })
  }

  render() {
    var items = [];
    for (var i = 0; i < this.state.formFields.length; i++) {
      items.push(
        <Formunit 
          fieldData={this.state.formFields[i]} 
          delField={this.delFormField}
          handleFormChange={this.handleFormChange}>
        </Formunit>
      )
    }

    return (
        <div class = "portform">
          <div class = "formheader">
            <p class = "name">Stock Name</p>
            <p class = "holdings">Stock Holdings ($)</p>
          </div>
          <div class = "formfields">
            {items}
          </div>
          <div class = "formfooter">
              <Button onClick={this.addFormField} variant="add" type="button">
                <p>Add</p>
              </Button>

              
          </div>
        </div>
    );
  }
}

export default Wholeform;