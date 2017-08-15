import "./Products.scss";
import React, { Component } from "react";
// import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Products extends Component {
	render() {
 	const { products } = this.props;
		return (
			<div className = "home">
				{products.map((product, index) => {
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

export default Products;
