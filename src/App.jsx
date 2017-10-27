import "./App.scss";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Welcome from "pages/Welcome";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Products from "pages/Products";
// import Clock from "pages/Clock";
import Checkout from "pages/Checkout";
import FourOhFour from "pages/404";
import PRODUCT from "json/products.json";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
	render() {
		// const { products, cart, cartCount } = this.state;
		return (
  			<Provider store={store}>
				<BrowserRouter>
					<div>
	 					<Navigation/>
						<Switch>
	 				<Route exact path="/" component={Welcome} />
		 			<Route exact path="/products" component={Products} />
							<Route exact path="/product/:productId" component={Item}/>
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/checkout" component={Checkout} />
							<Route path="*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
