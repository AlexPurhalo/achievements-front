// Node modules import
import React, { Component } from 'react';

// Images import
import EmailIcon from "../../../../../images/email-icon.png";
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's email or for to update this email
export default class EmailSection extends Component {
	constructor() {
		super();

		this.state = { onEditEmail: false };

		this.editEmailClick = this.editEmailClick.bind(this);
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	email() {
		if (!this.props.email && this.accountHolder()) return 'Your email address?';
		return this.props.email && this.props.email
	}

	emailForm() {
		return (
			<form className="update-email-form">
				<input type="text" className="edit-input update-email-input"/>
				<button className="non-styled-btn" type="submit">
					<img src={UpdateIcon} alt="update email" className="update-email-icon"/>
				</button>
			</form>
		);
	}

	editEmailClick() { this.setState({ onEditEmail: !this.state.onEditEmail })}

	render() {
		return (
			<ul className="inline-list edit-email-section">
				<li className="inline-block">
					{this.props.email && (<img src={EmailIcon} alt="email" className="email-icon"/>)}
				</li>
				<li className="inline-block">
					{this.state.onEditEmail ? this.emailForm() : (<h3 className="email">{this.email()}</h3>)}
				</li>
				<li className="inline-block">
					{this.accountHolder() &&
					<img src={EditPencil} alt="edit email" className="edit-email-icon" onClick={this.editEmailClick}/>}
				</li>
			</ul>
		);
	}
}
