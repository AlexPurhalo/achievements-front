// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Functions import
import { cutTechnologiesArr, defineArrItemsLeng } from '../../../../functions/technologies';

// Shows technologies that was applied to project
export default class Technologies extends Component {
	render() {
		return (
			<ul className="technologies-list inline-list">
				{cutTechnologiesArr(this.props.technologies).map(technology =>
					<li className="technology inline-block" key={technology.id}>{technology.name}</li>
				)}
				{defineArrItemsLeng(this.props.technologies) > 36 && (
					<li className="technology inline-block"><a href="#" className="more-link">Other...</a></li>
				)}
			</ul>
		);
	}
}
