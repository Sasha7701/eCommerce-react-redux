import "./Products.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll } from "actions/products";
// import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Products extends Component {
	componentDidMount() {
		this.props.getAll(this.props.productId);
	}

	render() {
 	const { products } = this.props;
		console.log(products);
		return (
			<div className = "home">
				{products.map((product) => {
           	return ([
						 <div className="desc">
				  	<h1>{product.name}</h1>
				   	<p>
								{product.category}
							</p>
							<div className="products">
								<Link  key={product.id} to={`/item/${product.id}`}>
								 <img src = {product.images[0].medium} className="product"/>
							 	 <img src = {product.images[1].medium} className="product"/>
							  </Link>
								<p>
									${product.price}
								</p>
							</div>
						</div>,
					]);
				})}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	const { activeProduct, error, products } = state.products;
	return {
		productId: props.match.productId,
		products,
		error,
	};
}

export default connect(mapStateToProps, { getAll })(Products);
