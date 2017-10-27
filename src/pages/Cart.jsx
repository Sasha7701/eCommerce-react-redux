import "./Cart.scss";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Cart extends Component {
	render() {
		const { cart, cartCount } = this.props;
		const totalPrice = cart.reduce(function(prev, item) {
			return prev + parseFloat(item.price);
		},0);

		if (cartCount > 0) {
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
			 <p className="countTotalItems">Total Items: { cartCount }</p>
			 <p className="cart-total-price">Total Price: $ { totalPrice }</p>
		 </div>
		 <div className="cart-checkout-button">
						<Link to= "/checkout">
							<button className="checkout-button"> CHECKOUT </button>
						</Link>
					</div>

				</div>
			);
		}
		else {
			return (
				<div>
					<h1 className = "emptyCart">CART IS EMPTY</h1>
					<p className="cart-total-price">Total Price $ {totalPrice.toFixed(2)}</p>
				</div>
			);
		}
	}
}

function mapStateToProps(state, props) {
	return {
		cartCount: state.cart.cartCount,
		cart: state.cart.cart,
	};
}


export default connect (mapStateToProps) (Cart);
