// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's country or allows to change it
export default class CountrySection extends Component {
	constructor() {
		super();

		this.state = { onEditCountry: false };

		this.editCountryClick = this.editCountryClick.bind(this);
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	country() {
		if (!this.props.country && this.accountHolder()) return 'Your country?';
		return this.props.country && `${this.props.country}, `
	}

	editCountryClick() { this.setState({ onEditCountry: !this.state.onEditCountry })}

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

	render() {
		return (
			<ul className="inline-list location">
				<li className="inline-block ">
					{this.state.onEditCountry ? this.countryForm() : (<h5 className="country">{this.country()}</h5>)}
				</li>
				<li className="inline-block">
					{this.accountHolder() &&
					<img src={EditPencil} alt="edit country" className="edit-country-icon" onClick={this.editCountryClick}/>}
				</li>
			</ul>
		);
	}
}
