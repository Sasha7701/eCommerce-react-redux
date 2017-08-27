import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import checkout from "./checkout";

export default combineReducers({
	cart, products, checkout,
});
