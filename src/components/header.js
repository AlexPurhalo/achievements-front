// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from 'react-router';
import { Link, IndexLink, browserHistory } from 'react-router';

// Actions import
import { destroySession } from '../actions/sessions';
import { addFlashMessage } from '../actions/flash-messages';

class Header extends Component {
	onSignOutClick() {
		this.props.destroySession();
		localStorage.removeItem('token');
		browserHistory.push('/');
		this.props.addFlashMessage('info', 'Bye, bye');
	}

	navbarForGuest() {
		return [
			<li className="nav-item" key={2}>
				<Link
					to="/persons/new"
					className="nav-link"
					activeClassName="active">Sign Up</Link>
			</li>,
			<li className="nav-item" key={3}>
				<Link
					to="/sessions/new"
					className="nav-link"
					activeClassName="active">Sign In</Link>
			</li>
		];
	}

	navbarForAuthenticated() {
		return [
			<li className="nav-item" key={4}>
				<Link
					onClick={this.onSignOutClick.bind(this)}
					className="nav-link cursor-pointer">Sign Out</Link>
			</li>
		];
	}

	render() {
		console.log(this.props.authenticated);
		return (
			<div className="header">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">Achievements</Link>
					<ul className="nav navbar-nav">
						<li className="nav-item" key={1}>
							<IndexLink
								to="/"
								className="nav-link"
								activeClassName="active">
								Persons
							</IndexLink>
						</li>
						{this.props.authenticated ? this.navbarForAuthenticated() : this.navbarForGuest() }
					</ul>
				</nav>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.sessions.authenticated }
}

export default connect(mapStateToProps, { destroySession, addFlashMessage })(Header);
