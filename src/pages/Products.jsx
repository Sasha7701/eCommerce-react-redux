import "./Products.scss";
import React, { Component } from "react";
// import PRODUCTS from "json/products.json";
import Loader from "components/Loader.jsx";
import { getAll } from "actions/products";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

				<div className = "Products">
					{products.map((product) => {
						return [
							<div className = "item">
								<Link key = {product.id} to= {`/product/${product.id}`}>
									<h3 className = "gallery-name"> {product.name}</h3>
									<img className= "gallery-image-main" src= {product.image.medium}/>
								</Link>
										 <div className= "product-image">
											 <img className= "product-image" src= {product.image.small}/>
										 <h3 className= "price"> ${product.price}</h3>
										 </div>
									 </div>];
					})}
				</div>
			);
		}
		return (
			<div className="Products">
				{ content }
			</div>
		);
	}
}


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
