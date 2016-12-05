// Node modules import
import React, {Component} from "react";


// Images import
import PlusIcon from "../../../../images/complete-mark.png";
import RemoveIcon from "../../../../images/remove-icon.png";

// Shows person's frameworks
export default class Frameworks extends Component {
	constructor() {
		super();

		this.addFrameworkChange = this. addFrameworkChange.bind(this);
		this.addFrameworkSubmit = this.addFrameworkSubmit.bind(this);
		this.removeFramework = this.removeFramework.bind(this);

		this.state = { framework: '' }
	}

	addFrameworkChange(e) {
		this.setState({ framework: e.target.value })
	}

	addFrameworkSubmit(e) {
		e.preventDefault();

		this.props.addFramework(this.props.personId, this.state.framework);
		this.setState({ framework: '' });
	}

	removeFramework(frameworkId) {
		console.log(frameworkId);
		this.props.removeFramework(this.props.personId, frameworkId);
	}

	frameworksList() {
		return (
			this.props.frameworks.map(framework =>
				<li className="framework" key={framework.id}>
					<ul>
						<li>#</li>
						<li><h4>{framework.framework}</h4></li>
						{this.props.personId == localStorage.getItem('accountId') &&
						(<li>
							<button
								className="non-styled-btn"
								type="reset"
								onClick={e => this.removeFramework(framework.id)}>
								<img src={RemoveIcon} className="framework-remove-icon" alt="remove-icon"/>
							</button>
						</li>)}
					</ul>
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
						value={this.state.framework}
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
