// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	navbarForGuest() {
		return (
			<ul>
				<li>Sign In</li>
				<li>Sign Up</li>
			</ul>
		);
	}

	navbarForAuthenticated() {
		return (
			<ul>
				<li>Account</li>
				<li>Sign Out</li>
			</ul>
		);
	}

	render() {
		console.log(this.props.authenticated);
		return (
			<div className="header">
				{this.props.authenticated ? this.navbarForAuthenticated() : this.navbarForGuest() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.sessions.authenticated }
}

export default connect(mapStateToProps)(Header);
