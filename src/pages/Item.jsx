import "./Item.scss";
import React, { Component } from "react";
// import PRODUCTS from "json/products.json";
import EmptyCart from "components/Checkout";
import { addToCart } from "actions/cart";
import { getOne } from "actions/products";
import { connect } from "react-redux";
// import { connect } from "redux-thunk";

class Item extends Component {
	componentDidMount() {
		this.props.getOne(this.props.productId);
	}

	_handleAddCart = (product) => {
		this.props.addToCart(this.props.product);
	}

	render() {
		 // const item = PRODUCTS[this.state.itemId];
		 console.log(product,"ffffffffffffffffffff");
		const { product, error, cart, cartCount } = this.props;
		if (!product) {
			 return <p>Loading....</p>;
		 }
		 else {
		// console.log(PRODUCTS[this.state.itemId].name);
		 console.log(product, "ssssssssssss");
		 return (
			 <div className="item">
				 {/* <h1>{this.state.itemId}</h1> */}
				 <h1 className = "watch-name">{product.name}</h1>
				 <div className = "item-image">
				 {product.images.map((product) => {
				 return ([
					 <img src = {product.medium} className = "img"/>,
					 ]);
			  })}
					</div>
					<button className="addCart" onClick={this._handleAddCart} value={product.id}>
				add Cart
			  </button>
					<div className = "text">
				 <p className = "description">{product.description}</p>
				 <p>{product.category}</p>
				 <h1>${product.price}</h1>
			 </div>
					<div className = "specs">
						{product.specs.map((product) => {
							return ([
					 	<div className="value">{product.value}</div>,
								<div className="label">{product.label}:</div>,
					 ]);
				 })}
			 		</div>
				</div>
			);
		}
	}
}

function mapStateToProps(state, props) {
	const { activeProduct, error } = state.products;
	return {
		productId: props.match.params.productId,
		product: activeProduct,
		error,
		cart: state.cart,
		cartCount: state.cart,
	};
}

export default connect(mapStateToProps, { getOne, addToCart })(Item);
