// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPerson } from '../../actions/persons';
import { updatePerson } from '../../actions/persons';
import { fetchPersonFrameworks } from '../../actions/person-frameworks';

// Show page's components import
import Profile from './person-show-page/profile';
import Frameworks from './person-show-page/frameworks';

// import Avatar from './person-show-page/avatar';
// import PersonInfo from './person-show-page/person-info';
// import Achievements from './person-show-page/achievements';
// import Works from './person-show-page/works';
// import ContactInfo from './person-show-page/contact-info';

// Shows info about person
class ShowPerson extends Component {
	componentWillMount() {
		this.props.fetchPerson(this.props.params.id);
		this.props.fetchPersonFrameworks(this.props.params.id)
	}

	render() {
		// console.log(`person frameworks from parent component: ${this.props.person_frameworks}`);
		return (
			<div className="person-show-page">
				<Frameworks
					frameworks={this.props.person_frameworks} />
				<Profile
					id={this.props.person.id}
					profile={this.props.person.profile}
					skills={this.props.person.skills}
					updateProfile={this.props.updatePerson} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		person: state.persons.single_person,
		errors: state.persons.errors,
		person_frameworks: state.personFrameworks.frameworks
	}
}

export default connect(mapStateToProps, {
	fetchPerson, updatePerson, fetchPersonFrameworks
})(ShowPerson);
