// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions import
import { destroySession } from '../actions/sessions';

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
				<li>
					<button onClick={this.onSignOutClick.bind(this)}>Sign Out</button>
				</li>
			</ul>
		);
	}

	onSignOutClick() {
		this.props.destroySession()
			.then(browserHistory.push('/'), localStorage.removeItem('token'));
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

export default connect(mapStateToProps, { destroySession })(Header);
