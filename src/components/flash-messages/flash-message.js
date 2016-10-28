// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlashMessage extends Component {
	render() {
		return (
			<div>
				<div className={`alert alert-${this.props.message.type}`}>
					{this.props.message.text}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.flashMessages.message}
}

export default connect(mapStateToProps)(FlashMessage);
