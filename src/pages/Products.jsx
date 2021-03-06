import "./Products.scss";
// import { Grid, Rating } from "semantic-ui-react";
import React, { Component } from "react";
// import PRODUCTS from "json/products.json";
import Loader from "components/Loader.jsx";
import { getAll } from "actions/products";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Products extends Component {
	componentDidMount() {
		this.props.getAll();
	}
	render() {
		const { products, isLOADING, error } = this.props;
		let content;

		if (isLOADING) {
			content = <Loader/>;
		}

		else if (!products) {
			content = <div className = "Products-Error">{ error }</div>;
		}

		else {
			content = (
				// <Grid centered>
				// <Grid.Column width={6}>
				<div className = "products">
					{products.map((product) => {
						return [
							<div className = "items">
								<h3 className = "product-name"> {product.name}</h3>
								<Link key = {product.id} to= {`/product/${product.id}`}>
									<img className= "product-image-main" src= {product.image.medium}/>
										 </Link>
											 <p className= "product-rating">Rating: {product.rating} out of 10</p>
										 <h3 className= "product-price"> ${product.price}</h3>
										 {/* </div> */}
									 </div>];
					})}
				</div>
				// {/* </Grid.Column> */}
			//	{/* </Grid> */}
			);
		}
		return (
			<div className="products">
				{ content }
			</div>
		);
	}
}

Products.propTypes = {
	products: PropTypes.arrayOf
	(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.string,
		rating: PropTypes.number,
		image: PropTypes.shape({
			small: PropTypes.string,
			medium : PropTypes.string,
			large : PropTypes.string,
			original : PropTypes.string,
		}),
	})).isRequired,
	isLoading: PropTypes.bool,
	error: PropTypes.string,

	// Actions
	getAll: PropTypes.func.isRequired,
};


// Connect state to INITIAL_STATE of products reducer
function mapStateToProps(state, props) {
	return {
		products: state.products.products,
		isLOADING: state.products.isLOADING,
		error: state.products.error,
	};
}

export default connect(mapStateToProps, { getAll }) (Products);
// class Products extends Component {
// 	componentDidMount() {
// 		this.props.getAll();
// 	}
// 	render() {
//  	const { products } = this.props;
// 		console.log(this.props, products, "LLLLLLLLLLLLLL");
// 		const { products, isLOADING, error } = this.props;
// 				let content;
//
// 				if (isLOADING) {
// 					content = <Loader/>;
// 				}
//
// 				else if (!products) {
// 					content = <div className = "Gallery-Error">{ error }</div>;
// 				}
//
// 				else {
// 					content = (
// 		//return (
// 			<div className = "home">
// 				{products.map((product) => {
//            	return ([
// 						 <div className="desc">
// 				  	<h1>{product.name}</h1>
// 				   	<p>
// 								{product.category}
// 							</p>
// 							<div className="products">
// 								<Link  key={product.id} to={`/item/${product.id}`}>
// 								 <img src = {product.image} className="product"/>
// 							 	 <img src = {product.images[1].medium} className="product"/>
// 							  </Link>
// 								<p>
// 									${product.price}
// 								</p>
// 							</div>
// 						</div>]);
//
// 				})}
//
// )
// }
// 			</div>
//
// 		)
//
// 	}
// }
//
// function mapStateToProps(state, props) {
// const { activeProduct, error, products } = state.products;
// 	return {
// 		products: state.products.products,
// 		productId: props.match.productId,
// 		products,
// 	};
// }
