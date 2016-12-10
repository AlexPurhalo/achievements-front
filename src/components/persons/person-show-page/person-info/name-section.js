// Node modules import
import React, { Component } from 'react';

// Images import
import EditPencil from '../../../../../images/edit-pencil.svg';
import UpdateIcon from '../../../../../images/complete-mark.png';

// Shows person's name or form to update this name
export default class NameSection extends Component {
	constructor() {
		super();

		this.state = { onEditName: false, name: null };

		this.editNameClick = this.editNameClick.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.updateName = this.updateName.bind(this);
	}

	editNameClick() { this.setState({ onEditName: !this.state.onEditName }) }

	handleChangeName(e) { this.setState({ name: e.target.value })}

	updateName(e) {
		e.preventDefault();

		if (this.state.name) {
			this.props.updateName(this.props.id, { name: this.state.name }) &&
			this.state.name  && this.setState({ onEditName: false })
		}
	}

	accountHolder() {
		return this.props.id == localStorage.getItem('accountId') && true
	}

	name() {
		if (!this.props.name && this.accountHolder()) return 'What is your name?';
		if (this.props.name) { return this.props.name } else { return 'Who is this pokemon?'}
	}

	nameForm() {
		return (
			<form className="update-name-form" onSubmit={this.updateName}>
				<input
					autoFocus
					type="text"
					className="edit-input update-name-input"
					onChange={this.handleChangeName}
					value={this.state.name}
					placeholder={this.props.name} />
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
