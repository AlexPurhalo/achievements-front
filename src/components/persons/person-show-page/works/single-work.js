// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Functions import
import { cutText } from '../../../../functions/text-transformations';

// Images import
import CodeIcon from '../../../../../images/code-icon.ico';
import ToAppIcon from '../../../../../images/to-app-icon.png';

// Components import
import Technologies from './technologies';
import Images from './images';

// Shows a single work
export default class Work extends Component {
	render() {
		return (
			<li className="single-work">
				<div className="row">
					<div className="col-md-4">
						<Images images={this.props.images}/>
					</div>
					<div className="col-md-8">
						<div className="work">
							<div className="row">
								<div className="col-md-9">
									<h3 className="work-title">{this.props.title}</h3>
								</div>
								<div className="col-md-3">
									<div className="links-to-project">
										{this.props.toCodeLink && (
											<a href="#">
												<img
													src={CodeIcon}
													alt="link-icon"
													className="github-icon"/>
											</a>
										)}
										{this.props.toAppLink && (
											<a href="#">
												<img
													src={ToAppIcon}
													alt="link-icon"
													className="link-icon"/>
											</a>
										)}

									</div>
								</div>
							</div>
							<p className="work-description">{cutText(this.props.description)}</p>
						</div>
						<div className="additional">
							<div className="row">
								<div className="col-md-9">
									<Technologies technologies={this.props.technologies}/>
								</div>
								<div className="col-md-3">
									{this.props.date && (<div className="single-work-additional-info-date">{this.props.date}</div>)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
	}
}
