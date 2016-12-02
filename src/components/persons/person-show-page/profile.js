// Node modules import
import React, { Component } from 'react';

// Images import
import PencilIcon from "../../../../images/edit-pencil.svg";
import CompleteMarkIcon from '../../../../images/complete-mark.png'

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onEditProfile: false,
			onEditSkills: false,
			profile: '',
			skills: ''
		};

		this.onEditProfile = this.onEditProfile.bind(this);
		this.onEditSkills = this.onEditSkills.bind(this);
		this.onChangeProfile = this.onChangeProfile.bind(this);
		this.onChangeSkills = this.onChangeSkills.bind(this);
		this.onUpdateProfile = this.onUpdateProfile.bind(this);
		this.onUpdateSkills = this.onUpdateSkills.bind(this);
	}

	onEditProfile() { this.setState({ onEditProfile: !this.state.onEditProfile }) }
	onEditSkills() { this.setState({ onEditSkills: !this.state.onEditSkills }) }
	onChangeProfile(e) { this.setState({ profile: e.target.value })}
	onChangeSkills(e) { this.setState({ skills: e.target.value })}
	onUpdateProfile(e) {
		e.preventDefault();
		this.props.updateProfile(this.props.id, { profile: this.state.profile });
		this.setState({ onEditProfile: !this.state.onEditProfile })
	}

	onUpdateSkills(e) {
		e.preventDefault();
		this.props.updateProfile(this.props.id, { skills: this.state.skills });
		this.setState({ onEditSkills: !this.state.onEditSkills })
	}

	showProfile(profile) { return <h1 className="profile">{profile ? `${profile}` : 'Person Profile'}</h1> }

	showSkills(skills) { return <h2 className="skills">{skills ? `${skills}` : 'Person Skills'}</h2> }

	showProfileForm() {
		return (
			<form onSubmit={this.onUpdateProfile}>
				<input
					autoFocus
					onChange={this.onChangeProfile}
					type="text"
					placeholder="Add Your Profile"
					className="edit-input profile-input"/>
				<button type="submit" className="non-styled-btn">
					<img className='skills-complete-mark-icon' src={CompleteMarkIcon} alt="edit-icon"/>
				</button>
			</form>
		);
	}

	showSkillsForm() {
		return (
			<form onSubmit={this.onUpdateSkills}>
				<input
					autoFocus
					onChange={this.onChangeSkills}
					type="text"
					placeholder="Add Your Skills"
					className="edit-input skills-input"/>
				<button type="submit" className="non-styled-btn">
					<img className='skills-complete-mark-icon' src={CompleteMarkIcon} alt="edit-icon"/>
				</button>
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
