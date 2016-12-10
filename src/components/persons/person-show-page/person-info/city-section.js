// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's city or allows to change it
export default class CitySection extends Component {
	constructor() {
		super();

		this.state = { onEditCity: false, city: null };

		this.editCityClick = this.editCityClick.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.updateCity = this.updateCity.bind(this);
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	editCityClick() { this.setState({ onEditCity: !this.state.onEditCity})}

	handleChangeCity(e) {
		this.setState({ city: e.target.value });
	}

	updateCity(e) {
		e.preventDefault();

		if (this.state.city) {
			this.props.updateCity(this.props.id, { city: this.state.city });
			this.setState({ onEditCity: !this.state.onEditCity });
		}
	}

	city() {
		if (!this.props.city && this.accountHolder()) return 'City?';
		return this.props.city ? this.props.city : 'Where does it live?'
	}

	cityForm() {
		return (
			<form className="update-city-form" onSubmit={this.updateCity}>
				<input
					autoFocus
					type="text"
					className="edit-input update-city-input"
					onChange={this.handleChangeCity}
					value={this.state.city}
					placeholder={this.props.city} />
				<button className="non-styled-btn" type="submit">
					<img src={UpdateIcon} alt="update city" className="update-city-icon"/>
				</button>
			</form>
		)
	}

	render() {
		return (
			<ul className="inline-list location">
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
