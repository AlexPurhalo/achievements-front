// Node modules import
import React, { Component } from 'react';

// Images import
import EmailIcon from "../../../../images/email-icon.png";
import PhoneIcon from "../../../../images/phone-icon.png";
import EditPencil from '../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../images/complete-mark.png';

// Shows person's info
export default class PersonInfo extends Component {
	constructor() {
		super();

		this.state = {
			onEditName: false,
			onEditAge: false,
			onEditCountry: false,
			onEditCity: false,
			onEditEmail: false,
			onEditPhone: false
		};

		this.editNameClick = this.editNameClick.bind(this);
		this.editAgeClick = this.editAgeClick.bind(this);
		this.editCountryClick = this.editCountryClick.bind(this);
		this.editCityClick = this.editCityClick.bind(this);
		this.editEmailClick = this.editEmailClick.bind(this);
		this.editPhoneClick = this.editPhoneClick.bind(this);
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

	editNameClick() { this.setState({ onEditName: !this.state.onEditName }) }
	editAgeClick() { this.setState({ onEditAge: !this.state.onEditAge })}
	editCountryClick() { this.setState({ onEditCountry: !this.state.onEditCountry })}
	editCityClick() { this.setState({ onEditCity: !this.state.onEditCity})}
	editEmailClick() { this.setState({ onEditEmail: !this.state.onEditEmail })}
	editPhoneClick() { this.setState({ onEditPhone: !this.state.onEditPhone })}

	nameForm() {
		return (
			<form className="update-name-form">
				<input autoFocus type="text" className="edit-input update-name-input" />
				<button className="non-styled-btn" type="submit">
					<img src={UpdateIcon} alt="update name" className="update-name-icon"/>
				</button>
			</form>
		);
	}

	ageForm() {
		return (
			<form className="update-years-form">
				<input autoFocus type="text" className="edit-input update-age-input"/>
				<button className="non-styled-btn" type="submit">
					<img src={UpdateIcon} alt="update age" className="update-age-icon"/>
				</button>
			</form>
		);
	}

	countryForm() {
		return (
			<form className="update-country-form">
				<input autoFocus type="text" className="edit-input update-country-input"/>
				<button className="non-styled-btn" type="submit">
					<img src={UpdateIcon} alt="update country" className="update-country-icon"/>
				</button>
			</form>
		);
	}

	cityForm() {
		return (
			<form className="update-city-form">
				<input autoFocus type="text" className="edit-input update-city-input"/>
				<button className="non-styled-btn" type="submit">
					<img src={UpdateIcon} alt="update city" className="update-city-icon"/>
				</button>
			</form>
		)
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
			<div className="col-md-6 person-info-section">
				<ul className="inline-list edit-name-section">
					<li className="inline-block">
						{this.state.onEditName ? this.nameForm() : (<h2 className="name">{this.name()}</h2>)}
					</li>
					<li className="inline-block">
							{this.accountHolder() && (
								<img src={EditPencil} alt="edit name" className="edit-name-icon" onClick={this.editNameClick}/>
							)}
					</li>
				</ul>
				<ul className="inline-list edit-years-section">
					<li className="inline-block">
						{this.state.onEditAge ? this.ageForm() : (<p className="years">{this.age()}</p>)}
					</li>
					<li className="inline-block">
						{this.accountHolder() &&
						<img src={EditPencil} alt="edit years" className="edit-years-icon" onClick={this.editAgeClick}/>}
					</li>
				</ul>
				<ul className="inline-list location">
					<li className="inline-block ">
						{this.state.onEditCountry ? this.countryForm() : (<h5 className="country">{this.country()}</h5>)}
					</li>
					<li className="inline-block">
						{this.accountHolder() &&
							<img src={EditPencil} alt="edit country" className="edit-country-icon" onClick={this.editCountryClick}/>}
					</li>
					<li className="inline-block">
						{this.state.onEditCity ? this.cityForm() : (<h4 className="person-city">{this.city()}</h4>)}
					</li>
					<li className="inline-block">
						{this.accountHolder() &&
						<img src={EditPencil} alt="edit city" className="edit-city-icon" onClick={this.editCityClick}/>}
					</li>
				</ul>
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
			</div>
		);
	}
}
