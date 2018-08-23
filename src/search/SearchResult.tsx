import React, { Component } from 'react';
import './Search.css';

class InputForm extends Component {
	 constructor(props) {
    super(props);
	   
   }

  render() {
    return (
	  <div className="searchresult">
	  
		<div>
		<div >
		<p className="psrchrslt"> Single Identifier will appear here</p>
		</div>
		<div>
		<table className="table">
  <thead className="thead-dark">
    <tr>
      <th className="col-md-2"  scope="col">Id</th>
      <th   scope="col">Coupon</th>
      <th   scope="col">Mat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Id1</td>
      <td>Coupon1</td>
      <td>Mat1</td>
    </tr>
    
	 </tbody>
</table>
	
	

		
</div>
		</div>
		</div>
      
    );
  }
}

export default InputForm;
