import "./Cart.scss";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


class Cart extends Component {
	 constructor(props) {
	 	super(props);
		this.state = {

		};
}

	render() {
		const { cart, cartCount } = this.props;
		const totalPrice = cart.reduce(function(prev, item) {
			return prev + parseFloat(item.price);
		},0);

		return (
			<div className="cartCount">

				{cart.map((item) => {
					return (
						<div className = "cart_info">
							  <h1 className="name">{ item.name }</h1>
							<img src = { item.images[0].medium } className="watchImg"/>
          	<h2 className="price">$ { item.price }</h2>
						</div>
					);
			 })}
			 <div className="total">
			 <p className="countTotal">Total Items: { cartCount }</p>
			 <p className="cart-total-price">Total Price: { totalPrice }</p>
		 </div>
		 <div className="cart-checkout-button">
	 						<Link to= "/success">
	 							<button> CHECKOUT </button>
	 						</Link>
	 					</div>
			</div>
		);
	}
}
export default Cart;
