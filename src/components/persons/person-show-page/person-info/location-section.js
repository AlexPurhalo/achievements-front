// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's location
export default class LocationSection extends Component {
	constructor() {
		super();

		this.state = {
			onEditCountry: false,
			onEditCity: false
		};

		this.editCountryClick = this.editCountryClick.bind(this);
		this.editCityClick = this.editCityClick.bind(this);
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	country() {
		if (!this.props.country && this.accountHolder()) return 'Your country?';
		return this.props.country && `${this.props.country}, `
	}

	city() {
		if (!this.props.city && this.accountHolder()) return 'City?';
		return this.props.city ? this.props.city : 'Where does it live?'
	}

	editCountryClick() { this.setState({ onEditCountry: !this.state.onEditCountry })}

	editCityClick() { this.setState({ onEditCity: !this.state.onEditCity})}

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
				<li className="inline-block">
					{this.state.onEditCity ? this.cityForm() : (<h4 className="person-city">{this.city()}</h4>)}
				</li>
				<li className="inline-block">
					{this.accountHolder() &&
					<img src={EditPencil} alt="edit city" className="edit-city-icon" onClick={this.editCityClick}/>}
				</li>
			</ul>
		);
	}
}
