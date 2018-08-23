import React from 'react';
import './Search.css';
import { SearchSecProps } from './SearchSec';

class InputForm extends React.Component<SearchSecProps> {
  render() {
    return (
	
	<div className="inputtp">
      <form onSubmit={this.handleSubmit}>
  
  <div className="form-group col-sm-8 ">

    <label htmlFor="IdentifierId">Identifier Id: </label>
    <input type="text"
            value={this.props.searchStr}
            onChange={this.props.onSearchChange} className="form-control" id="IdentifierId" aria-describedby="emailHelp" placeholder="Enter Identifier Id"></input>
    </div>
  
  
  <div className="form-group col-sm-8 ">

    <label htmlFor="IdentifierType">Identifier Type</label>
    <select
            id='IdentifierType'
			className="form-control"
             onChange={this.props.onIdTypeChange}
            
            value={this.props.idType}
          >
            <option value="CUSIP">CUSIP</option>
          </select>
	</div>
  
  <div className="form-group col-sm-8 ">
  <button type="submit" className="btn btn-primary ">Submit</button>
  </div>
</form>
</div>
	  );
  }
}

export default InputForm;
