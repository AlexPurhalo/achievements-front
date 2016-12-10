// Node modules import
import React, { Component } from 'react';

// Images import
import EmailIcon from "../../../../images/email-icon.png";
import PhoneIcon from "../../../../images/phone-icon.png";
import EditPencil from '../../../../images/edit-pencil.svg';

// Shows person's info
export default class PersonInfo extends Component {
	constructor() {
		super();

	}
	name() {
		if (!this.props.name && this.accountHolder()) return 'What is your name?';
		if (this.props.name) { return this.props.name } else { return 'Who is this pokemon?'}
	}

	age() {
		if (!this.props.age && this.accountHolder()) return 'How old are you?';
		return this.props.age && `${this.props.age} years`;
	}

	country() {
		if (!this.props.country && this.accountHolder()) return 'Your country?';
		return this.props.country && `${this.props.country}, `
	}

	city() {
		if (!this.props.city && this.accountHolder()) return 'City?';
		return this.props.city ? this.props.city : 'Where does it live?'
	}

	email() {
		if (!this.props.email && this.accountHolder()) return 'Your email address?';
		return this.props.email && this.props.email
	}

	phone() {
		if (!this.props.phone && this.accountHolder()) return 'Your mobile number?';
		return this.props.phone && this.props.phone
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	render() {
		return (
			<div className="col-md-6 person-info-section">
				<ul className="inline-list edit-name-section">
					<li className="inline-block"><h2 className="name">{this.name()}</h2></li>
					<li className="inline-block">
						{this.accountHolder() && (<img src={EditPencil} alt="edit name" className="edit-name-icon" />)}
					</li>
				</ul>
				<ul className="inline-list edit-years-section">
					<li className="inline-block">
						<p className="years">{this.age()}</p>
					</li>
					<li className="inline-block">
						{this.accountHolder() && <img src={EditPencil} alt="edit years" className="edit-years-icon"/>}
					</li>
				</ul>
				<ul className="inline-list">
					<li className="inline-block location">
						{this.country()}
					</li>
					<li className="inline-block">
						{this.accountHolder() && <img src={EditPencil} alt="edit country" className="edit-country-icon"/>}
					</li>
					<li className="inline-block">
						{this.city()}
					</li>
					<li className="inline-block">
						{this.accountHolder() && <img src={EditPencil} alt="edit city" className="edit-city-icon"/>}
					</li>
				</ul>
				<ul className="inline-list edit-email-section">
					<li className="inline-block">
						{this.props.email && (<img src={EmailIcon} alt="email" className="email-icon"/>)}
					</li>
					<li className="inline-block">
						<h3 className="email">
							{this.email()}
						</h3>
					</li>
					<li className="inline-block">
						{this.accountHolder() && <img src={EditPencil} alt="edit email" className="edit-email-icon"/>}
					</li>
				</ul>
				<ul className="inline-list">
					<li className="inline-block">
						<p className="phone">
							{this.phone()}
						</p>
					</li>
					<li className="inline-block">
						{this.props.phone && (<img src={PhoneIcon} alt="phone" className="phone-icon"/>)}
					</li>
					<li className="inline-block">
						{this.accountHolder() && <img src={EditPencil} alt="edit phone" className="phone-edit-icon"/>}
					</li>
				</ul>
			</div>
		);
	}
}
