// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchAllPersons } from '../../actions/persons';

// Persons-list components import
import SinglePerson from './single-person';
import PersonsPagination from './persons-pagination';


// Shows persons information
class Persons extends Component {
	componentWillMount() {
		this.props.fetchAllPersons(1);
	}

	render() {
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
				<PersonsPagination
					fetchPersons={this.props.fetchAllPersons}
					pagesCount={this.props.personsPageInfo.total_pages} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		persons: state.persons.all_persons,
		personsPageInfo: state.persons.users_page_info,
		errors: state.persons.errors
	}
}

export default connect(mapStateToProps, { fetchAllPersons })(Persons);
