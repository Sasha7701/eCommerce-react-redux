import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import EmptyCart from "components/Checkout";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	_handleAddCart = (itemId) => {
		this.props.handleAdd(this.props.item.id);
	}

	render() {
		 // const item = PRODUCTS[this.state.itemId];
		const { item, handleAdd } = this.props;

		// console.log(PRODUCTS[this.state.itemId].name);
		 console.log(item, "ssssssssssss");
		return (
			<div className="item">
				{/* <h1>{this.state.itemId}</h1> */}
				<h1 className = "watch-name">{item.name}</h1>
				<div className = "item-image">
				 {item.images.map((item) => {
				 return ([
					 <img src = {item.medium} className = "img"/>,
					 ]);
			  })}
				</div>
				<button className="addCart" onClick={this._handleAddCart} value={item.id}>
				add Cart
			  </button>
				<div className = "text">
				 <p className = "description">{item.description}</p>
				 <p>{item.category}</p>
				 <h1>${item.price}</h1>
			 </div>
				<div className = "specs">
					{item.specs.map((item) => {
						return ([
					 	<div className="value">{item.value}</div>,
							<div className="label">{item.label}:</div>,
					 ]);
				 })}

				</div>
			</div>

		);
	}
}

export default Item;
