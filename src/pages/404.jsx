import "./404.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class FourOFour extends Component {
	render() {
		return (
			<div className="err">

				<Link to="/" className="link">
					<h1 className="fourO">Click the Link to go back! <span className="error">404 Error!</span></h1>
				</Link>
			</div>
		);
	}
}

export default FourOFour;
