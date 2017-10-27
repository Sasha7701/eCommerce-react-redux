import "./Clock.scss";
import React from 'react';
import { Link } from "react-router-dom";


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date(new Date().getTime()).toLocaleTimeString(),
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({
			time: new Date(new Date().getTime()).toLocaleTimeString(),
		});
	}
	render() {
		return (
			<p className="App-clock">
				{this.state.time}
			</p>
		);
	}
}

export default Clock;
