// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

// Representation of single person in its List
class SinglePerson extends Component {
	render() {
		return (
			<Link to={`persons/${this.props.id}`}>
				<li>
					{this.props.username}
				</li>
			</Link>
		);
	}
}

export default SinglePerson;
