// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Images import
import EmptyPlace from '../../../../../images/nothing.png';

// Functions import
import { addIndex } from '../../../../functions/images';

// Shows the screens that describes project
export default class Images extends Component {
	constructor() {
		super();

		this.state = { actualImage: 0 };

		this.choiceImageClick = this.choiceImageClick.bind(this);
	}

	choiceImageClick(num) {
		this.setState({actualImage: num})
	}

	showImage() {
		if (this.props.images.length < 1) {
			return EmptyPlace;
		} else {
			return (this.props.images[this.state.actualImage].image.url)
		}
	}

	showPagination(images) {
		return (
			images.map(image =>
				<li
					key = {image.num}
					className={`pagination-item inline-block ${image.num === this.state.actualImage && 'pagination-item-active'}`}
					onClick={e => this.choiceImageClick(image.num)}>
				</li>
			)
		)
	}

	render() {
		let arrWithIndex = addIndex(this.props.images);

		return (
			<div className="images">
				<div className="thumbnail-cover">
					<img
						src={this.showImage()}
						alt="work-thumbnail"
						className="thumbnail"/>
				</div>
				<div className="pagination-section">
					<ul className="pagination-list inline-list">
						{arrWithIndex.length > 1 && (this.showPagination(arrWithIndex))}
					</ul>
				</div>
			</div>
		);
	}
}
