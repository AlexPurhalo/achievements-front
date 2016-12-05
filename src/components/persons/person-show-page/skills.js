// Node modules import
import React, { Component } from 'react';

// Images import
import PlusIcon from "../../../../images/complete-mark.png";

// Shows person skills
export default class Skills extends Component {
	render() {
		return (
			<div className="skills-section">
				<ul className="skills">
					{
						<li className="skill">{this.props.skill}</li>
					}
					<li className="skill"># React</li>
					<li className="skill"># Rails</li>
					<li className="skill"># Grape</li>
					<li className="skill-input">
						<form>
							<input
								type="text"
								placeholder="New Skill"
								className="edit-input add-skill-input"/>
							<button type="reset" className="non-styled-btn">
								<img src={PlusIcon} alt="" className="add-skill-img"/>
							</button>
						</form>
					</li>
				</ul>
			</div>
		);
	}
}
