// Node modules import
import React, { Component } from 'react';

export default class Persons extends Component {
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
