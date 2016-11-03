// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllPersons } from '../../actions/persons';

class Persons extends Component {
	componentWillMount() {
		this.props.fetchAllPersons(1);
	}

	render() {
		console.log(this.props.persons);
		console.log(this.props.errors);
		return (
			<div className="persons-list">
				<h3>Persons list</h3>
				<ul>
					{ this.props.persons.map(person => <li key={person.id}>{person.username}</li>) }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		persons: state.persons.all_persons,
		errors: state.persons.error
	}
}

export default connect(mapStateToProps, { fetchAllPersons })(Persons);
