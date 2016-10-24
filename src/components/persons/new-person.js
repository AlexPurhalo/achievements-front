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
			password: ''
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

		this.props.createPerson(this.state.username, this.state.password);
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
			</div>
		);
	}
}

export default connect(null, { createPerson })(NewPerson)
