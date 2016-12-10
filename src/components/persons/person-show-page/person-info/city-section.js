// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's city or allows to change it
export default class CitySection extends Component {
	constructor() {
		super();

		this.state = { onEditCity: false };

		this.editCityClick = this.editCityClick.bind(this);
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	editCityClick() { this.setState({ onEditCity: !this.state.onEditCity})}

	city() {
		if (!this.props.city && this.accountHolder()) return 'City?';
		return this.props.city ? this.props.city : 'Where does it live?'
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
