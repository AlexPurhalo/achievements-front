// Node modules import
import React, { Component } from 'react';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { onEditProfile: false, onEditSkills: false };

		this.onEditProfile = this.onEditProfile.bind(this);
		this.onEditSkills = this.onEditSkills.bind(this);
	}

	onEditProfile() {
		this.setState({ onEditProfile: !this.state.onEditProfile });
	}
	onEditSkills() {
		this.setState({ onEditSkills: !this.state.onEditSkills });
	}

	showProfile() {
		return "Full-Stack Web Developer";
	}

	showSkills() {
		return "Ruby (Grape, Rails) + JS (React)";
	}

	showProfileForm() {
		return (
			<form>
				<input autoFocus type="text" placeholder="Add Your Profile" />
			</form>
		);
	}

	showSkillsForm() {
		return (
			<form>
				<input autoFocus type="text" placeholder="Add Your Skills" />
			</form>
		);
	}

	onEditProfileButton() {
		return (
			<button type="reset" className="non-styled-btn" onClick={this.onEditProfile}>
				<img className='profile-edit-icon' src="http://simpleicon.com/wp-content/uploads/pencil.svg" alt="edit-icon"/>
			</button>
		);
	}

	onEditSkillsButton() {
		return (
			<button type="reset" className="non-styled-btn" onClick={this.onEditSkills}>
				<img className='skills-edit-icon' src="http://simpleicon.com/wp-content/uploads/pencil.svg" alt="edit-icon"/>
			</button>
		);
	}

	render() {
		const personId = this.props.personId, accountId = localStorage.getItem('accountId');

		return (
			<div className="row profile-section">
				<h1 className="profile">
					{personId == accountId && this.state.onEditProfile ? this.showProfileForm() : this.showProfile()}
					{personId == accountId && this.onEditProfileButton() }
				</h1>
				<h2 className="skills">
					{personId == accountId && this.state.onEditSkills ? this.showSkillsForm() : this.showSkills()}
					{personId == accountId && this.onEditSkillsButton() }
				</h2>
			</div>
		);
	}
}
