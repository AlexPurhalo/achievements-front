// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's age or it's form
export default class AgeSection extends Component {
	constructor() {
		super();

		this.state = { onEditAge: false };

		this.editAgeClick = this.editAgeClick.bind(this);
	}

	age() {
		if (!this.props.age && this.accountHolder()) return 'How old are you?';
		return this.props.age && `${this.props.age} years`;
	}

	editAgeClick() { this.setState({ onEditAge: !this.state.onEditAge })}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
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

	render() {
		return (
			<ul className="inline-list edit-years-section">
				<li className="inline-block">
					{this.state.onEditAge ? this.ageForm() : (<p className="years">{this.age()}</p>)}
				</li>
				<li className="inline-block">
					{this.accountHolder() &&
					<img src={EditPencil} alt="edit years" className="edit-years-icon" onClick={this.editAgeClick}/>}
				</li>
			</ul>
		);
	}
}
