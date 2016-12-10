// Node modules import
import React, { Component } from 'react';

// Images import
import PhoneIcon from "../../../../../images/phone-icon.png";
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's phone or form to update it
export default class PhoneSection extends Component {
	constructor() {
		super();

		this.state = { onEditPhone: false };

		this.editPhoneClick = this.editPhoneClick.bind(this);
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	phone() {
		if (!this.props.phone && this.accountHolder()) return 'Your mobile number?';
		return this.props.phone && this.props.phone
	}

	editPhoneClick() { this.setState({ onEditPhone: !this.state.onEditPhone })}

	phoneForm() {
		return (
			<form className="update-phone-form">
				<input type="text" className="edit-input update-phone-input"/>
				<button className="non-styled-btn">
					<img src={UpdateIcon} alt="update phone" className="update-phone-icon"/>
				</button>
			</form>
		)
	}

	render() {
		return (
			<ul className="inline-list edit-phone-section">
				<li className="inline-block">
					{this.state.onEditPhone ? this.phoneForm() : (<p className="phone">{this.phone()}</p>)}
				</li>
				<li className="inline-block">
					{this.props.phone && (<img src={PhoneIcon} alt="phone" className="phone-icon"/>)}
				</li>
				<li className="inline-block">
					{this.accountHolder()
					&& <img src={EditPencil} alt="edit phone" className="phone-edit-icon" onClick={this.editPhoneClick}/>}
				</li>
			</ul>
		);
	}
}
