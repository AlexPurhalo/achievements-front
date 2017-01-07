// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Works extends Component {
	render() {
		return (
			<div className="works-section">
				<h2 className="title">The list of my Works</h2>
				<ul className="works-list">
					<li className="single-work">
						<div className="row">
							<div className="col-md-4">
								<img
									src="https://cs7057.vk.me/c7008/v7008344/4c66e/icjwsG2ozTI.jpg"
									alt="work-thumbnail"
									className="thumbnail"/>
								<div className="pagination-section">
									<ul className="pagination-list inline-list">
										<li className="pagination-item pagination-item-active inline-block">
										</li>
										<li className="pagination-item inline-block">
										</li>
										<li className="pagination-item inline-block">
										</li>
										<li className="pagination-item inline-block">
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-8">
								<div className="work">
									<div className="row">
										<div className="col-md-9">
											<h3 className="work-title">Personal Achievements</h3>
										</div>
										<div className="col-md-3">
											<div className="links-to-project">
												<a href="#">
													<img
														src="http://www.peaceofmindwebsite.com/user/themes/scalar/images/favicon.ico"
														alt="link-icon"
														className="github-icon"/>
												</a>
												<a href="#">
													<img
														src="https://cdn3.iconfinder.com/data/icons/web-15/128/RSSvgLink-2-512.png"
														alt="link-icon"
														className="link-icon"/>
												</a>
											</div>
										</div>
									</div>
									<p className="work-description">
										This is pretty interesting web-site that helps you provide the most required information about
										yourself as about developer, quality assurance, recruiter, etc.. It just like as resume and portfolio
										together, when you want describe all your skills and achievements to show somebody this gonna safe
										your time. This also useful if you aren't looking for introducing your abilities just in this moment.
										You can collect data about you and your works just when you've achieved some new...
									</p>
								</div>
								<div className="additional">
									<div className="row">
										<div className="col-md-9">
											<ul className="technologies-list inline-list">
												<li className="technology inline-block">React</li>
												<li className="technology inline-block">Ruby on Rails</li>
												<li className="technology inline-block">Bootstrap</li>
												<li className="technology inline-block">Angular 2</li>
											</ul>
										</div>
										<div className="col-md-3">
											<div className="single-work-additional-info-date">08.10.2016</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
// sdfsfsdf
