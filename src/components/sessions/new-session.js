// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions import
import { createSession } from '../../actions/sessions';
import { addFlashMessage } from '../../actions/flash-messages';

// Allows to create a new session
class NewSession extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			errors: []
		};

		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmitPerson = this.handleSubmitPerson.bind(this);
	}

	handleChangeUsername(e) {
		this.setState({ username: e.target.value });
	}

	handleChangePassword(e) {
		this.setState({ password: e.target.value });
	}

	handleSubmitPerson(e) {
		e.preventDefault();
		let username = this.state.username, password = this.state.password; // variables definition
		const errors = [];								// definition of empty array for future errors collecting

		!username && errors.push('enter a username please');
		!password && errors.push('enter a password please');

		// receives javascript web token of user indicated by passed username
		errors.length < 1
			? this.props.createSession(username, password)
					.then(action => {
						action.type === "create_session_success" && (
							this.props.addFlashMessage('success', 'You have signed in successfully'),
							browserHistory.push('/'),
								localStorage.setItem('token', action.payload.jwt)
						);

						action.type === 'create_session_failure' && this.setState({ errors: action.payload });
					})
			: this.setState({ errors: errors });
	}

	render() {
		return (
			<div className="new-session-page">
				<h1>Sign In</h1>
				<form onSubmit={this.handleSubmitPerson}>
					<label>Username</label>
					<input
						onChange={this.handleChangeUsername}
						value={this.state.username}
						type="text"
						placeholder="Username"
						className="form-control"/>

					<label>Password</label>
					<input
						onChange={this.handleChangePassword}
						value={this.state.password}
						type="text"
						placeholder="Password"
						className="form-control"/>

					<button
						type="submit"
						className="btn btn-primary">Sign In</button>
				</form>
				<ul>
					{ this.state.errors.map(error => <li key={error}>{error}</li>) }
				</ul>
			</div>
		);
	}
}

export default connect(null, { createSession, addFlashMessage })(NewSession);
