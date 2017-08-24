import "./App.scss";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Welcome from "pages/Welcome";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Products from "pages/Products";
import Success from "pages/Success";
import FourOhFour from "pages/404";
import PRODUCT from "json/products.json";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
	// state = {
	// 		 products: PRODUCT,
	// 		 cart: [],
	// 		 cartCount: 0,
	// 	 };
	//
	// 	 _getProduct = (productId) => {
	// 	 	return this.state.products.reduce((prev, product) => {
	// 	 		return product.id === productId ? product : prev;
	// 			});
	// 		}
	// 		_addToCart = (productId) => {
	// 			// let cart = this.state.cart.concat([ev.target.value])
	// 			const { products, cart } = this.state;
	// 			this.setState({
	// 				cart: [...cart, this._getProduct(productId)],
	// 				cartCount: cart.length + 1,
	// 			});
	// 		};
			// addCart(ev) {
			// 	this.setState({ cart: this.state.cart });
			// }


			render() {
				// const { products, cart, cartCount } = this.state;
				return (
  			<Provider store={store}>
						<BrowserRouter>
							<div>
	 			{/* <Navigation cartCount={ this.state.cartCount }/> */}
				<Navigation/>
				<Switch>
	 				<Route exact path="/" component={Welcome} />
		 			<Route exact path="/products" component={Products} />
					<Route exact path="/product/:productId" component={Item}/>
					<Route exact path="/cart" component={Cart} />
						);
		 			}}

						/>

						<Route exact path="/success" component={Success} />
						<Route path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	);
}
}

export default App;
