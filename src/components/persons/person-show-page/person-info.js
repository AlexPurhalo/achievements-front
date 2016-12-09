// Node modules import
import React, { Component } from 'react';

// Images import
import EmailIcon from "../../../../images/email-icon.png";
import PhoneIcon from "../../../../images/phone-icon.png";

// Shows person's info
export default class PersonInfo extends Component {
	render() {
		return (
			<div className="col-md-6 person-info-section">
				<h2 className="name">Alexander Purkhalo</h2>
				<p className="years">20 years</p>
				<ul className="inline-list">
					<li className="inline-block location">
						<ul className="inline-list">
							<li className="inline-block">
								<p>Ukraine</p>
							</li>
							<li className="inline-block">
								<p>,</p>
							</li>
						</ul>
					</li>
					<li className="inline-block location">
						<p>Kiev</p>
					</li>
				</ul>
				<ul className="inline-list email-section">
					<li className="inline-block">
						<img src={EmailIcon} alt="email" className="email-icon"/>
					</li>
					<li className="inline-block">
						<h3 className="email">alexpurhalo@gmail.com</h3>
					</li>
				</ul>
				<ul className="inline-list">
					<li className="inline-block">
						<p className="phone">+38 095 220 78 66</p>
					</li>
					<li className="inline-block">
						<img src={PhoneIcon} alt="phone" className="phone-icon"/>
					</li>
				</ul>
			</div>
		);
	}
}
