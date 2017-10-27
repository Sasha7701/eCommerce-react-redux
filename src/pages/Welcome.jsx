import "./Welcome.scss";
import React, { Component } from "react";
import Clock from "../components/Clock";

class Welcome extends Component {
	componentDidMount() {
		document.body.classList.add("has-bg");
	}

	componentWillUnmount() {
		document.body.classList.remove("has-bg");
	}

	render() {
		return (
			<div className="clock">
				<div className = "header"><h1 className="head">TIMEX</h1>
				<Clock />
				</div>
				<div className="story">
					<h2 className="sub-head">Quality Timekeeping Since 1854</h2>
					<p>Our roots date back to 1854 in Waterbury, Connecticut, a time when</p>
					<p>how you made something was just as important as what you made.</p>
				</div>
			</div>
		);
	}
}

export default Welcome;




// import React, { Component } from "react";
//
// class Welcome extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Welcome!</h1>
// 				<p>Don't for get to buy a fine watch</p>
// 			</div>
// 		);
// 	}
// }
//
// export default Welcome;
