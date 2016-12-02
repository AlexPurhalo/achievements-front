// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPerson } from '../../actions/persons';

// Show page's components import
import Profile from './person-show-page/profile';
// import Avatar from './person-show-page/avatar';
// import PersonInfo from './person-show-page/person-info';
// import Achievements from './person-show-page/achievements';
// import Works from './person-show-page/works';
// import ContactInfo from './person-show-page/contact-info';

// Shows info about person
class ShowPerson extends Component {
	componentWillMount() {
		this.props.fetchPerson(this.props.params.id);
	}

	render() {
		return (
			<div className="person-show-page">
				<Profile
					id={this.props.person.id}
					profile={this.props.person.profile}
					skills={this.props.person.skills} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		person: state.persons.single_person,
		errors: state.persons.errors
	}
}

export default connect(mapStateToProps, { fetchPerson})(ShowPerson);
