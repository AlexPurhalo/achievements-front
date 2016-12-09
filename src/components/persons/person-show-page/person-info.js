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
				<h2 className="name">{this.props.name ? this.props.name : 'Who is this pokemon?'}</h2>
				<p className="years">{this.props.age && `${this.props.age} years`}</p>
				<ul className="inline-list">
					<li className="inline-block location">
						{this.props.country ? `${this.props.country}, ` : 'Country'}
					</li>
					<li className="inline-block location">
						{this.props.city ? this.props.city : 'City'}
					</li>
				</ul>
				<ul className="inline-list email-section">
					<li className="inline-block">
						<img src={EmailIcon} alt="email" className="email-icon"/>
					</li>
					<li className="inline-block">
						<h3 className="email">
							{this.props.email ? this.props.email : 'some_email@mail.com'}
						</h3>
					</li>
				</ul>
				{this.props.phone && (
					<ul className="inline-list">
						<li className="inline-block">
							<p className="phone">
								{this.props.phone}
							</p>
						</li>
						<li className="inline-block">
							<img src={PhoneIcon} alt="phone" className="phone-icon"/>
						</li>
					</ul>
				)}
			</div>
		);
	}
}
