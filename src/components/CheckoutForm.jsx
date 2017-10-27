import React, { Component } from 'react';
import { connect } from "react-redux";
import { submitOrder } from "actions/checkout";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CheckoutForm extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				name: "",
				address: "",
				city: "",
				state: "",
				zipCode: "",
				error: null,
			};
		}
	}

	_handleChange = (ev) => {
		this.setState({
			[ev.target.name]: [ev.target.value].toString() });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		const { cart, cartCount } = this.props;
		this.props.submitOrder(this.state);
	}

	render() {
		const { name, address, zipCode, city, state, value  } = this.state;
		const { cart, orderSuccess, error, orderFailure, cartCount } = this.props;
		const options = [
			{ key:'AL', text:'Alabama', value:'AL' },
			{ key:'AK', text:'Alaska', value:'AK' },
			{ key:'AZ', text:'Arizona', value:'AZ' },
			{ key:'AR', text:'Arkansas', value:'AR' },
			{ key:'CA', text:'California', value:'CA' },
			{ key:'CO', text:'Colorado', value:'CO' },
			{ key:'CT', text:'Connecticut', value:'CT' },
			{ key:'DE', text:'Delaware', value:'DE' },
			{ key:'DC', text:'Washington D.C.', value:'DC' },
			{ key:'FL', text:'Florida', value:'FL' },
			{ key:'GA', text:'Georgia', value:'GA' },
			{ key:'HI', text:'Hawaii', value:'HI' },
			{ key:'ID', text:'Idaho', value:'ID' },
			{ key:'IL', text:'Illinois', value:'IL' },
			{ key:'IN', text:'Indiana', value:'IN' },
			{ key:'IA', text:'Iowa', value:'IA' },
			{ key:'KS', text:'Kansas', value:'KS' },
			{ key:'KY', text:'Kentucky', value:'KY' },
			{ key:'LA', text:'Louisiana', value:'LA' },
			{ key:'ME', text:'Maine', value:'ME' },
			{ key:'MD', text:'Maryland', value:'MD' },
			{ key:'MA', text:'Massachusetts', value:'MA' },
			{ key:'MI', text:'Michigan', value:'MI' },
			{ key:'MN', text:'Minnesota', value:'MN' },
			{ key:'MS', text:'Mississippi', value:'MS' },
			{ key:'MO', text:'Missouri', value:'MO' },
			{ key:'MT', text:'Montana', value:'MT' },
			{ key:'NE', text:'Nebraska', value:'NE' },
			{ key:'NV', text:'Nevada', value:'NV' },
			{ key:'NH', text:'New Hampshire', value:'NH' },
			{ key:'NJ', text:'New Jersey', value:'NJ' },
			{ key:'NM', text:'New Mexico', value:'NM' },
			{ key:'NY', text:'New York', value:'NY' },
			{ key:'NC', text:'North Carolina', value:'NC' },
			{ key:'ND', text:'North Dakota', value:'ND' },
			{ key:'OH', text:'Ohio', value:'OH' },
			{ key:'OK', text:'Oklahoma', value:'OK' },
			{ key:'OR', text:'Oregon', value:'OR' },
			{ key:'PA', text:'Pennsylvania', value:'PA' },
			{ key:'PR', text:'Puerto Rico', value:'PR' },
			{ key:'RI', text:'Rhode Island', value:'RI' },
			{ key:'SC', text:'South Carolina', value:'SC' },
			{ key:'SD', text:'South Dakota', value:'SD' },
			{ key:'TN', text:'Tennessee', value:'TN' },
			{ key:'TX', text:'Texas', value:'TX' },
			{ key:'UT', text:'Utah', value:'UT' },
			{ key:'VT', text:'Vermont', value:'VT' },
			{ key:'VA', text:'Virginia', value:'VA' },
			{ key:'WA', text:'Washington', value:'WA' },
			{ key:'WV', text:'West Virginia', value:'WV' },
			{ key:'WI', text:'Wisconson', value:'WI' },
			{ key:'WY', text:'Wyoming', value:'WY' },
		];

		let message;

		if (orderSuccess) {
			message = (<div className = "OrderFormSuccess">
				<Link to= "/products"> <p>Your Order has been submitted successfully! Please feel free to continue shopping here if you'd like.</p></Link>
			</div>);
		}

		if (orderFailure) {
			message = <div className = "OrderFormFailure"> { error } </div>;
		}

  		//  const { cartCount } = this.props;
    		return (
    			<div className="checkout-form-container">
    				<form onSubmit={this._handleSubmit} className="form-checkout">
    					<div className="checkout-form-fields">
    						<div className="button-field">
    							<label name="name">Name</label>
    							<input type="text" name="name" onChange={this._handleChange} required />
    						</div>
    						<div className="button-field">
    							<label name="address">Street address</label>
    							<input type="text" name="address" onChange={this._handleChange} required />
    						</div>
    						<div className="button-field">
    							<label name="city">City</label>
    							<input type="text" name="city" onChange={this._handleChange} required />
    						</div>
    						<div className="button-field">
    							<label name="state">State</label>
    							<select onChange={this._handleChange} name="state" className="state" >
    								{options.map((states, key) => {
    									return (
    										<option value={states.value} >{states.text}</option>
    									);
    								})}
    							</select>
    						</div>
    						<div className="button-field">
    							<label name="zipCode">Zip code</label>
    							<input type="text" name="zipCode" onChange={this._handleChange} required />
    						</div>
    						<div className="button-field-submit hidden">
    							<button type="submit" className="submit" onSubmit={this._handleSubmit}>Purchase</button>
    						</div>
						<div className="order-message">
       					  { message }
       				 </div>
					</div>
    				</form>
    			</div>
    		);
    	}
}

CheckoutForm.propTypes = {
	error: PropTypes.string,
	orderSuccess: PropTypes.bool,
	orderFailure: PropTypes.bool,
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			category: PropTypes.string,
			description: PropTypes.string,
			rating: PropTypes.number,
			price: PropTypes.string,
			specs: PropTypes.arrayOf(PropTypes.shape({
				0: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				1: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				2: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				3: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				4: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				5: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				6: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				7: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				8: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				9: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				10: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				11: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				12: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				13: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
				14: PropTypes.shape({
					label: PropTypes.string,
					value: PropTypes.string,
				}),
			})),
			images: PropTypes.arrayOf(PropTypes.shape({
				0: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
				1: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
				2: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
			})),
		}),
	})),
	cartCount: PropTypes.number,
};

function mapStateToProps(state, props) {
	return {
		// cart: state.cart.cart,
		// cartIds: state.cart.productIds,
		//cartIds: state.cart.cartIds,
		// orderStar: state.checkout.orderStar,
		orderSuccess: state.checkout.orderSuccess,
		orderFailure: state.checkout.orderFailure,
		cart: state.cart.cart,
		error: state.checkout.error,
    cartCount: state.cart.cartCount,
	};
}


export default connect(mapStateToProps, { submitOrder }) (CheckoutForm);
