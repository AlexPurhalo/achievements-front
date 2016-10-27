// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllPersons } from '../../actions/persons';

class Persons extends Component {
	componentWillMount() {
		this.props.fetchAllPersons();
	}

	render() {
		return (
			<div className="persons-list">
				<h3>Persons list</h3>
				<ul>
					<li>Alex</li>
					<li>Jackie</li>
					<li>Tomas</li>
					<li>Vito</li>
				</ul>
			</div>
		);
	}
}

export default connect(null, { fetchAllPersons })(Persons);
