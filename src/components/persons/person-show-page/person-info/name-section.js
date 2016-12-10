// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's name or form to update this name
export default class NameSection extends Component {
	constructor() {
		super();

		this.state = { onEditName: false };

		this.editNameClick = this.editNameClick.bind(this);
	}

	editNameClick() { this.setState({ onEditName: !this.state.onEditName }) }

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	name() {
		if (!this.props.name && this.accountHolder()) return 'What is your name?';
		if (this.props.name) { return this.props.name } else { return 'Who is this pokemon?'}
	}

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

	render() {
		return (
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
		);
	}
}
