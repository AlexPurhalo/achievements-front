// Node modules import
import React, {Component} from "react";
import PlusIcon from "../../../../images/complete-mark.png";

// Images import

// Shows person's frameworks
export default class Frameworks extends Component {
	frameworksList() {
		return (
			this.props.frameworks.map(framework =>
				<li className="framework" key={framework.id}>
					# {framework.framework}
				</li>
			)
		);
	}

	render() {
		// console.log(`person frameworks from child component: ${this.props.frameworks}`);
		return (
			<div className="frameworks-section">
				<ul className="frameworks">
					{this.props.frameworks ? this.frameworksList() : 'loading...'}
					<li className="framework-input">
						<form>
							<input
								type="text"
								placeholder="New Skill"
								className="edit-input add-framework-input"/>
							<button type="reset" className="non-styled-btn">
								<img src={PlusIcon} alt="" className="add-framework-img"/>
							</button>
						</form>
					</li>
				</ul>
			</div>
		);
	}
}
