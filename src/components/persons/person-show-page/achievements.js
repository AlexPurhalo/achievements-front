// Node modules import
import React, { Component } from 'react';

// Receives images
import RemoveIcon from '../../../../images/remove-icon.png';
import EditIcon from '../../../../images/edit-pencil.svg';
import CompleteMark from '../../../../images/complete-mark.png';


// Shows person's achievements
export default class Achievements extends Component {
	constructor() {
		super();

		this.state = { editField: false, achievement: '', chosenItem: null, newAchievement: '' };

		this.createAchievement = this.createAchievement.bind(this);
		this.handleNewAchievement = this.handleNewAchievement.bind(this);

		this.handleEditAchievementClick = this.handleEditAchievementClick.bind(this);
		this.handleAchievementText = this.handleAchievementText.bind(this);
		this.updateAchievementInfo = this.updateAchievementInfo.bind(this);
		this.removeAchievementClick = this.removeAchievementClick.bind(this);
	}

	// Create Actions
	handleNewAchievement(e) {
		this.setState({ newAchievement: e.target.value })
	}

	createAchievement(e) {
		e.preventDefault();
		this.props.addAchievement(this.props.personId, { achievement: this.state.newAchievement })
		this.setState({ newAchievement: '' })
	}

	// Update Actions
	handleEditAchievementClick(item) {
		this.setState({ editField: !this.state.editField, chosenItem: item });
	}

	handleAchievementText(e) {
		this.setState({ achievement: e.target.value });
	}

	updateAchievementInfo(e) {
		e.preventDefault();
		this.props.updateAchievement(this.props.personId, this.state.chosenItem, { achievement: this.state.achievement });
		this.setState({ editField: false, achievement: '' });
	}

	removeAchievementClick(achievementId) {
		this.props.removeAchievement(this.props.personId, achievementId)
	}

	// For rendering
	addAchievementField() {
		return (
			<form className="add-achievement-form" onSubmit={this.createAchievement}>
				<textarea
					className="form-control"
					onChange={this.handleNewAchievement}
					value={this.state.newAchievement}
					placeholder="Add a new achievement here"/>
				<button
					type="submit"
					className="btn btn-danger add-achievement">
					Add
				</button>
			</form>
		);
	}

	showAchievement(achievement) {
		return <p className="name">{achievement.name}</p>;
	}

	updateAchievementForm(achievement) {
		return (
			<form onSubmit={this.updateAchievementInfo} className="update-achievement-form">
				<ul className="inline-list">
					<li className="inline-block">
						<input
							type="text"
							value={this.state.achievement}
							placeholder={achievement.name}
							onChange={this.handleAchievementText}
							className="edit-input"
							autoFocus/>
					</li>
					<li className="inline-block">
						<button className="non-styled-btn" type="submit">
							<img src={CompleteMark} alt="complete-mark" className="complete-mark"/>
						</button>
					</li>
				</ul>
			</form>
		);
	}

	render() {
		return (
			<div className="achievements-section">
				<h2 className="section-title">Summary of Qualifications</h2>
				<div className="form-section">
					{this.props.personId == localStorage.getItem('accountId') && this.addAchievementField()}
				</div>
				<ul className="achievements-list">
					{this.props.achievements.map(achievement =>
						<li className="achievement" key={achievement.id}>
							<ul className="inline-list">
								<li className="inline-block">
									{this.state.editField && achievement.id === this.state.chosenItem
										? this.updateAchievementForm(achievement)
										: this.showAchievement(achievement)}
								</li>
								{this.props.personId == localStorage.getItem('accountId') && (
									<li className="inline-block">
										<img
											onClick={e => this.handleEditAchievementClick(achievement.id)}
											src={EditIcon} alt="edit-icon"
											className="edit-icon"/>
									</li>
								)}
								{this.props.personId == localStorage.getItem('accountId') && (
									<li className="inline-block">
										<img
											onClick={e => this.removeAchievementClick(achievement.id)}
											src={RemoveIcon}
											alt="remove-icon"
											className="remove-icon"
										/>
									</li>
								)}
							</ul>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
