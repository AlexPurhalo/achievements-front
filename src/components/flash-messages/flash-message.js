// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { addFlashMessage } from '../../actions/flash-messages';
import { destroyFlashMessage } from '../../actions/flash-messages';

class FlashMessage extends Component {
	showMessage(message) {
		return (
			<div className={`alert alert-${message.type}`}>
				{message.text}

				<button className="close" onClick={this.handleDeleteMessageClick.bind(this)}>
					<span>&times;</span>
				</button>
			</div>
		);
	}

	handleDeleteMessageClick() {
		this.props.destroyFlashMessage()
	}

	render() {
		return (
			<div>
				{this.props.message && this.showMessage(this.props.message)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.flashMessages.message}
}

export default connect(mapStateToProps, { addFlashMessage, destroyFlashMessage })(FlashMessage);
