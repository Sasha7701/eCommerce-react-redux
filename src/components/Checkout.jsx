import React, { Component } from "react";

class Checkout extends React.Component {
constructor(props) {
  		super(props);
  		this.state = {
  			userName: "",
  			userEmail: "",
  			userPhone: 0,
  			userAddress: "",
  			userState: "",
  			userZip: 0,
  	 };
  	}


  	render() {
  		return (
  			<div className="checkout-form">
<form action="/Success">
  					<div className="checkout-form-fields">
  						<div className="button-field">
  							<label name="userName">Username</label>
  							<input type="text" name="userName" required/>
  						</div>
  						<div className="button-field">
  							<label name="userEmail">Email address</label>
  							<input type="text" name="userEmail" required/>
  						</div>
  						<div className="button-field">
  							<label name="userPhone">Phone number</label>
  							<input type="text" name="userPhone" required/>
  						</div>
  						<div className="button-field">
  							<label name="userAddress">Street address</label>
  							<input type="text" name="userAddress" required/>
  						</div>
  						<div className="button-field">
  							<label name="userState">State</label>
  							<input type="text" name="userState" required/>
  						</div>
  						<div className="button-field">
  							<label name="userZip">Zip code</label>
  							<input type="text" name="userZip" required/>
  						</div>
  						<div className="button-submit">
  							<button type="submit">Purchase</button>
  						</div>
  						</div>
  				</form>
  	   </div>
  		);
  	}
}

export default Checkout;
