// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchAllPersons } from '../../actions/persons';

// Persons-list components import
import SinglePerson from './single-person';

// Shows persons information
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
					{ this.props.persons.map(person =>
						<SinglePerson
							key={person.id}
							id={person.id}
							username={person.username} />
					)}
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
