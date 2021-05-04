import React, { Component } from 'react';
import { ThemeContext } from './App';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.initialCount,
		};
	}

	render() {
		return (
			// <div>
			// 	<button onClick={() => this.decrementCount(1)}>-</button>
			// 	<span>{this.state.count}</span>
			// 	<button onClick={() => this.incrementCount(1)}>+</button>
			// </div>
			<ThemeContext.Consumer>
				{(style) => (
					<div>
						<button style={style} onClick={() => this.changeCount(-1)}>
							-
						</button>
						<span>{this.state.count}</span>
						<button style={style} onClick={() => this.changeCount(1)}>
							+
						</button>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}

	// incrementCount(amount) {
	// 	this.setState({ count: this.state.count + amount });
	// }
	// decrementCount(amount) {
	// 	this.setState({ count: this.state.count - amount });
	// }

	changeCount(amount) {
		this.setState((prevState) => {
			return { count: prevState.count + amount };
		});
	}
}

export default Counter;
