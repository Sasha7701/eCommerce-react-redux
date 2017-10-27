import "./Checkout.scss";
import React, { Component } from "react";
import CheckoutForm from "../components/CheckoutForm";

class Success extends Component {
	render() {
		return (
			<div className="App-checkout">
				<CheckoutForm />
			</div>
		);
	}
}

export default Success;
