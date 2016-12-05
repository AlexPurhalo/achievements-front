// Node modules import
import React, {Component} from "react";
import PlusIcon from "../../../../images/complete-mark.png";

// Images import

// Shows person's frameworks
export default class Frameworks extends Component {
	constructor() {
		super();

		this.addFrameworkChange = this. addFrameworkChange.bind(this);
		this.addFrameworkSubmit = this.addFrameworkSubmit.bind(this);

		this.state = { framework: '' }
	}

	addFrameworkChange(e) {
		this.setState({ framework: e.target.value })
	}

	addFrameworkSubmit(e) {
		e.preventDefault();

		this.props.addFramework(this.props.personId, this.state.framework);
	}

	frameworksList() {
		return (
			this.props.frameworks.map(framework =>
				<li className="framework" key={framework.id}>
					# {framework.framework}
				</li>
			)
		);
	}

	addFrameworkInput() {
		return (
			<li className="framework-input">
				<form onSubmit={this.addFrameworkSubmit}>
					<input
						onChange={this.addFrameworkChange}
						type="text"
						placeholder="New Skill"
						className="edit-input add-framework-input"/>
					<button type="submit" className="non-styled-btn">
						<img src={PlusIcon} alt="" className="add-framework-img"/>
					</button>
				</form>
			</li>
		);
	}

	render() {
		// console.log(`person frameworks from child component: ${this.props.frameworks}`);
		return (
			<div className="frameworks-section">
				<ul className="frameworks">
					{this.props.frameworks ? this.frameworksList() : 'loading...'}
					{this.props.personId == localStorage.getItem('accountId') && this.addFrameworkInput()}
				</ul>
			</div>
		);
	}
}
