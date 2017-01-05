// Node modules import
import React, { Component } from 'react';

// Images import
import LoaderImg from '../../images/loader.gif';

// Shows loader
export default class Loader extends Component {
	render() {
		return (
			<div className="loader">
				<img src={LoaderImg} alt="loader"/>
			</div>
		);
	}
}
