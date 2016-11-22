// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions import
import { createPerson } from '../../actions/persons';
import { addFlashMessage } from '../../actions/flash-messages';
import { createSession } from '../../actions/sessions';

// Shows form and calls action creators to add a new user
class NewPerson extends Component {
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
			e.preventDefault(); 																			// preventing page from reloading
		let username = this.state.username, password = this.state.password; // variables definition
		const errors = [];								// definition of empty array for future errors collecting

		// username validation
		username
			? (
				!(/^([a-zA-Z0-9 _-]+)$/).test(username) && errors.push('only characters and numbers'),
				username.length < 4 && errors.push('minimum 4 characters for username')
				)
			: errors.push('username field is required');



		// password validation
		password
			? password.length < 6 && errors.push('minimum 6 symbols for password')
			: errors.push('password is required');

		// calls action creator to add a new record to db or shows errors list
		errors.length < 1
			? this.props.createPerson(username, password)
					.then(action => {
						action.type === "create_person_success" && (
							// adds flash message says that record wsa created
							this.props.addFlashMessage('success', 'Account has been created'),
							// redirects to root page after then record was created
							browserHistory.push('/'),
							// creates new session
							this.props.createSession(username, password),
							// sets jwt token to indicate session
							localStorage.setItem('token', action.payload.access_token),
							localStorage.setItem('accountId', action.payload.id)
						);

						action.type === 'create_person_failure' && this.setState({ errors: action.payload });
					})
			// fill in global errors variable by passing occurred errors
			:	this.setState({ errors: errors });
	}

	render() {
		return (
			<div className="new-person-page">
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
						className="btn btn-primary">Sign Up</button>
				</form>
				<ul>
					{ this.state.errors.map(error => <li key={error}>{error}</li> )}
				</ul>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errors: state.persons.errors }
}
export default connect(mapStateToProps, { createPerson, addFlashMessage, createSession })(NewPerson)
