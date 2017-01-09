// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components Import
import Work from './works/single-work';

// Shows the works
export default class Works extends Component {
	render() {
		return (
			<div className="works-section">
				<h2 className="title">The list of my Works</h2>
				<ul className="works-list">
					{this.props.works.map(work =>
						<Work
							key={work.id}
							title={work.title}
							description={work.description}
							technologies={work.technologies}
							images={work.images}
							toAppLink={work.link_to_app}
							toCodeLink={work.link_to_code}
							date={work.release_date}/>
					)}
				</ul>
			</div>
		);
	}
}
