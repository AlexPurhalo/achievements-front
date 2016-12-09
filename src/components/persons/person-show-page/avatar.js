// Node modules import
import React, { Component } from 'react';

// Images import
import UnknownPerson from '../../../../images/unknown-person.jpg';

export default class Avatar extends Component {
	personAvatar() {
		return <img src={this.props.avatar} alt="person-avatar" className="avatar"/>
	}

	emptyAvatar() {
		return <img src={UnknownPerson} alt="person-avatar" className="empty-avatar" />
	}
	render() {
		return (
			<div className="col-md-6 avatar-section">
				<div className="thumbnail">
					{this.props.avatar ? this.personAvatar() : this.emptyAvatar()}
				</div>
			</div>
		);
	}
}
