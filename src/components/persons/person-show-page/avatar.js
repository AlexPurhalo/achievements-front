// Node modules import
import React, { Component } from 'react';


// Images import
import UnknownPerson from '../../../../images/unknown-person.jpg';
import CompleteMark from '../../../../images/complete-mark.png';
import CancelIcon from '../../../../images/remove-icon.png';
import EditIcon from '../../../../images/edit-pencil.svg';

// Shows person's avatar
export default class Avatar extends Component {
	constructor(props) {
		super(props);

		this.state = { file: null, imagePreviewUrl: null, toUpdate: false, onEdit: false };

		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleImageSubmit = this.handleImageSubmit.bind(this);
		this.cancelEdition = this.cancelEdition.bind(this);

		this.accountId = localStorage.getItem('accountId')
	}

	handleImageSubmit(e) {
		e.preventDefault();
		this.props.updateAvatar(this.props.id, this.state.file);
		this.setState({ onEdit: false });
	}

	handleImageChange(e) {
		let reader = new FileReader(), file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result,
				onEdit: true
			})
		};

		reader.readAsDataURL(file);
	}

	cancelEdition() {
		this.setState({ onEdit: false, imagePreviewUrl: null })
	}
	emptyAvatar() {
		return <img src={UnknownPerson} alt="person-avatar" className="empty-avatar" />
	}

	personAvatar() {
		return <img
			src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl : this.props.avatar}
			alt="person-avatar"
			className="avatar" />
	}

	cancelEditButton() {
		return (
			<button type="reset" className="non-styled-btn" onClick={this.cancelEdition}>
				<img src={CancelIcon} alt="cancel" className="cancel-icon"/>
			</button>
		);
	}

	updateButton() {
		return (
			<button
				onClick={this.handleImageSubmit}
				className="btn non-styled-btn"
				type="submit" >
				<img
					src={CompleteMark}
					alt="update-avatar"
					className="complete-mark"/>
			</button>
		);
	}

	editIcon() {

	}

	avatarForm() {
		return (
			<form onSubmit={this.handleImageSubmit}>
				<label htmlFor="files" className="btn on-select-avatar">
					Select Image
					<img src={EditIcon} alt="edit-avatar" className="edit-avatar-icon"/>
				</label>
				<input
					onChange={this.handleImageChange}
					id="files"
					className="file-input"
					type="file" />
				{!this.state.onEdit && this.editIcon()}
				{this.state.onEdit && this.updateButton() }
				{this.state.onEdit && this.cancelEditButton() }
			</form>
		);
	}

	render() {
		return (
			<div className="col-md-6 avatar-section">
				<div className="thumbnail">
					{this.props.avatar ? this.personAvatar() : this.emptyAvatar()}
				</div>
				{this.accountId == this.props.id && this.avatarForm()}
			</div>
		);
	}
}
