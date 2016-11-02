// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPerson } from '../../actions/persons';

// Shows info about person
class ShowPerson extends Component {
	componentWillMount() {
		this.props.fetchPerson(this.props.params.id);
	}

	render() {
		console.log(this.props.person);
		console.log(this.props.errors);

		return (
			<div>
				{
					this.props.errors.length < 1
						? this.props.person.username
						: this.props.errors.map(error => error )
				}
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
