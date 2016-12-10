// Node modules import
import React, { Component } from 'react';

// Components import
import NameSection from './person-info/name-section.js';
import AgeSection from './person-info/age-section';
import EmailSection from './person-info/email-section';
import PhoneSection from './person-info/phone-section';
import CountrySection from './person-info/country-section';
import CitySection from './person-info/city-section';

// Shows person's info
export default class PersonInfo extends Component {
	render() {
		return (
			<div className="col-md-6 person-info-section">
				<NameSection
					name={this.props.name}
					id={this.props.id}
					updateName={this.props.updatePerson} />

				<AgeSection
					age={this.props.age}
					id={this.props.id}
					updateAge={this.props.updatePerson} />

				<ul className="inline-list">
					<li className="inline-block">
						<CountrySection
							country={this.props.country}
							id={this.props.id}
							updateCountry={this.props.updatePerson} />
					</li>

					<li className="inline-block">
						<CitySection
							city={this.props.city}
							id={this.props.id}
							updateCity={this.props.updatePerson} />
					</li>
				</ul>

				<EmailSection
					email={this.props.email}
					id={this.props.id}
					updateEmail={this.props.updatePerson} />

				<PhoneSection
					phone={this.props.phone}
					id={this.props.id}
					updatePhone={this.props.updatePerson} />
			</div>
		);
	}
}
