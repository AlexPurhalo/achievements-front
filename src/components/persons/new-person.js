// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { createPerson } from '../../actions/persons';

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
					{ this.props.errors && this.props.errors.map((error => <li key={error}>{error}</li> ))}
				</ul>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errors: state.persons.errors }
}
export default connect(mapStateToProps, { createPerson })(NewPerson)
