// Node modules import
import React, { Component } from 'react';

// Images import
import PencilIcon from "../../../../images/edit-pencil.svg";

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { onEditProfile: false, onEditSkills: false };

		this.onEditProfile = this.onEditProfile.bind(this);
		this.onEditSkills = this.onEditSkills.bind(this);
	}

	onEditProfile() { this.setState({ onEditProfile: !this.state.onEditProfile }) }
	onEditSkills() { this.setState({ onEditSkills: !this.state.onEditSkills }) }

	showProfile(profile) { return <h1 className="profile">{profile ? `${profile}` : 'Person Profile'}</h1> }

	showSkills(skills) { return <h2 className="skills">{skills ? `${skills}` : 'Person Skills'}</h2> }

	showProfileForm() {
		return (
			<form>
				<input autoFocus type="text" placeholder="Add Your Profile" className="edit-input profile-input"/>
			</form>
		);
	}

	showSkillsForm() {
		return (
			<form>
				<input autoFocus type="text" placeholder="Add Your Skills" className="edit-input skills-input"/>
			</form>
		);
	}

	onEditProfileButton() {
		return (
			<button type="reset" className="non-styled-btn" onClick={this.onEditProfile}>
				<img className='profile-edit-icon' src={PencilIcon} alt="edit-icon"/>
			</button>
		);
	}

	onEditSkillsButton() {
		return (
			<button type="reset" className="non-styled-btn" onClick={this.onEditSkills}>
				<img className='skills-edit-icon' src={PencilIcon} alt="edit-icon"/>
			</button>
		);
	}

	render() {
		const accountId = localStorage.getItem('accountId'),
			id = this.props.id,
			profile = this.props.profile,
			skills = this.props.skills;

		return (
			<div className="row profile-section">
				<ul className="inline-list">
					<li className="inline-block">
						{
							id == accountId && this.state.onEditProfile
								? this.showProfileForm()
								: this.showProfile(profile)
						}
					</li>
					<li className="inline-block">
						{id == accountId && this.onEditProfileButton()}
					</li>
				</ul>
				<ul className="inline-list">
					<li className="inline-block">
						{
							id == accountId && this.state.onEditSkills
								? this.showSkillsForm()
								: this.showSkills(skills)
						}
					</li>
					<li className="inline-block">
						{id == accountId && this.onEditSkillsButton()}
					</li>
				</ul>
			</div>
		);
	}
}
