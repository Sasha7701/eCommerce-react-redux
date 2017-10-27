import "./Item.scss";
import React, { Component } from "react";
// import PRODUCTS from "json/products.json";
import Loader from "components/Loader.jsx";
import { addToCart } from "actions/cart";
import { getOne } from "actions/products";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Item extends Component {
	componentDidMount() {
		this.props.getOne(this.props.productId);
	}

	_handleAddCart = (product) => {
		this.props.addToCart(this.props.product);
	}

	render() {
		 const { product, isLoading, error, cart } = this.props;
		let content;

		 if (isLoading) {
			 content = <Loader/>;
		 }
		 else if (!product) {
			content = <div className = "Product Error"> { error } </div>;
		}
		//  console.log(product, "ssssssssssss");
		 else {
			 content = (
		 // return (
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
					<div className = "specs">
						<p className="desc">Specs</p>
						{product.specs.map((product) => {
							return ([
								<ul className="spec">
									<li>{product.label.toUpperCase()}: {product.value}</li>
								</ul>,
							]);
						})}
					</div>
					<button className="addToCart" onClick={this._handleAddCart} value={product.id}>
					ADD TO CART
			  </button>
					<div className = "description">
				 <p className = "text">{product.description}</p>
				 <p className="category">{product.category}</p>
				 <h1 className="item-price">$ {product.price}</h1>
			 </div>
		 </div>
			);
		}
		return (
			<div className= "Product">
				{ content }
			</div>
		);
	}
}

Item.propTypes = {
	productId: PropTypes.string.isRequired,
	cart: PropTypes.array,
	product: PropTypes.shape({
		id: PropTypes.integer,
		name: PropTypes.string,
		category: PropTypes.string,
		description: PropTypes.string,
		rating: PropTypes.integer,
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
	}),
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
	error: PropTypes.string,
	isLoading: PropTypes.bool,
	// Actions
	getOne: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
	const { activeProduct, isLoading, error } = state.products;
	return {
		productId: props.match.params.productId,
		product: activeProduct,
		error,
		cart: state.cart,
		isLoading,
	};
}

export default connect(mapStateToProps, { getOne, addToCart })(Item);
