import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const { cartCount } = this.props;
		const links = [{
			to: "/",
			text: "Welcome",
		}, {
			to: "/products",
			text: "Products",
		}, {
			to: "/cart",
			text: "Cart",
		}];

		return (
			<nav className="Nav">
				{links.map((link) => {
					return (
						<NavLink
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</NavLink>
					);
				})}

				<span className = "count">{ cartCount }</span>
				<img src="https://www.seriousseeds.com/sites/default/files/popup-cart-icon.png" className="empty-cart"/>
			</nav>
		);
	}
}

export default Navigation;
