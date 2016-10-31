// Node modules import
import React, { Component } from 'react';

// Components import
import Header from './header'
import FlashMessagesList from './flash-messages/flash-message';

// Layout component
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<FlashMessagesList />
				{this.props.children}
			</div>
		);
	}
}
