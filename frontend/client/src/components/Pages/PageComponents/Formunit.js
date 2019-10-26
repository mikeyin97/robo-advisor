import React from 'react';
import Button from 'react-bootstrap/Button';

class Formunit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fieldData = this.props.fieldData;
    let id = fieldData["id"];
    let currStock = fieldData["stock"];
    let value = fieldData["value"];
    
    let stockOptions = []
    let stocks = ['a', 'b', 'c']
   
    if (currStock === '') {
      stockOptions.push(
        <option selected>Choose a stock</option>
      )
    } else {
      stockOptions.push(
        <option value = ''>Choose a stock</option>
      )
    }

    stocks.forEach(function(stock) {
      if (stock === currStock) {
        stockOptions.push(<option value={stock} selected>{stock}</option>)
      } else {
        stockOptions.push(<option value={stock}>{stock}</option>)
      }
    }) 
    
    return (
      <div class = "formfield">
        <div class="input-group dropdown">
          <select name="stockField" onChange={(e) => this.props.handleFormChange(e, fieldData['id'])} class="custom-select stock-select" id="inputGroupSelect01">
          {stockOptions}
          </select>
        </div>
  
        <div class="form-group select">
          <input value={value} name="valueField" class="form-control" onChange={(e) => this.props.handleFormChange(e, fieldData['id'])}></input>
        </div>
  
        <Button variant="remove" type="button" onClick={(e) => this.props.delField(fieldData['id'])}>
          <p>Remove</p>
        </Button>
      </div>
    );
  }
}

export default Formunit;
