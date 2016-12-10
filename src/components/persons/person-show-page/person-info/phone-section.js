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

		this.state = { onEditPhone: false, phone: null };

		this.editPhoneClick = this.editPhoneClick.bind(this);
		this.handleChangePhone = this.handleChangePhone.bind(this);
		this.updatePhone = this.updatePhone.bind(this);
	}

	editPhoneClick() { this.setState({ onEditPhone: !this.state.onEditPhone })}

	handleChangePhone(e) { this.setState({ phone: e.target.value })}

	updatePhone(e) {
		e.preventDefault();

		if (this.state.phone) {
			this.props.updatePhone(this.props.id, { phone: this.state.phone });
			this.setState({ onEditPhone: !this.state.onEditPhone })
		}
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	phone() {
		if (!this.props.phone && this.accountHolder()) return 'Your mobile number?';
		return this.props.phone && this.props.phone
	}

	phoneForm() {
		return (
			<form className="update-phone-form" onSubmit={this.updatePhone}>
				<input
					type="text"
					className="edit-input update-phone-input"
					onChange={this.handleChangePhone}
					value={this.state.phone}
					placeholder={this.props.phone} />
				<button className="non-styled-btn" type="submit">
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
