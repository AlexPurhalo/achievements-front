// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPerson } from '../../actions/persons';
import { updatePerson, updatePersonAvatar } from '../../actions/persons';
import {
	fetchPersonFrameworks,
	addPersonFramework,
	removePersonFramework
} from '../../actions/person-frameworks';
import {
	fetchAchievements,
	addAchievement,
	updateAchievement,
	deleteAchievement
} from '../../actions/achievements';
import { fetchWorks } from '../../actions/works';

// Show page's components import
import Profile from './person-show-page/profile';
import Frameworks from './person-show-page/frameworks';
import Avatar from './person-show-page/avatar';
import PersonInfo from './person-show-page/person-info';
import Achievements from './person-show-page/achievements';
import Works from './person-show-page/works';

// Common components import
import Loader from '../loader';


// import ContactInfo from './person-show-page/contact-info';

// Shows info about person
class ShowPerson extends Component {
	// Shows loader
	renderLoader() {
		return <div><Loader /></div>;
	}

	// Shows person components
	renderComponents() {
		return (
			<div>
				<Frameworks
					frameworks={this.props.person_frameworks}
					personId={this.props.person.id}
					addFramework={this.props.addPersonFramework}
					removeFramework={this.props.removePersonFramework} />
				<Profile
					id={this.props.person.id}
					profile={this.props.person.profile}
					skills={this.props.person.skills}
					updateProfile={this.props.updatePerson} />
				<div className="row">
					<Avatar
						id={this.props.person.id}
						avatar={this.props.person.avatar}
						updateAvatar={this.props.updatePersonAvatar} />
					<PersonInfo
						id={this.props.person.id}
						name={this.props.person.name}
						age={this.props.person.age}
						email={this.props.person.email}
						country={this.props.person.country}
						city={this.props.person.city}
						phone={this.props.person.phone}
						updatePerson={this.props.updatePerson} />
				</div>
				<Achievements
					achievements={this.props.achievements}
					personId={this.props.person.id}
					addAchievement={this.props.addAchievement}
					updateAchievement={this.props.updateAchievement}
					removeAchievement={this.props.deleteAchievement} />
				<Works
					works={this.props.works} />
			</div>
		);
	}

	componentWillMount() {
		this.props.fetchPerson(this.props.params.id);
		this.props.fetchPersonFrameworks(this.props.params.id);
		this.props.fetchAchievements(this.props.params.id);
		this.props.fetchWorks(this.props.params.id);
	}

	render() {
		// console.log(`person frameworks from parent component: ${this.props.person_frameworks}`);
		return (
			<div className="person-show-page">
				{this.props.person && this.props.achievements && this.props.works
					? this.renderComponents()
					: this.renderLoader() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		person: state.persons.single_person,
		errors: state.persons.errors,
		person_frameworks: state.personFrameworks.frameworks,
		achievements: state.personAchievements.achievements,
		works: state.personWorks.works
	}
}

export default connect(mapStateToProps, {
	fetchPerson,
	updatePerson,
	fetchPersonFrameworks,
	addPersonFramework,
	removePersonFramework,
	updatePersonAvatar,
	fetchAchievements,
	addAchievement,
	updateAchievement,
	deleteAchievement,
	fetchWorks
})(ShowPerson);
