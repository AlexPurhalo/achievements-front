// Constants import
import { CREATE_SESSION_SUCCESS } from '../constants/sessions';

const INITIAL_STATE = {
	authenticated: false
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_SESSION_SUCCESS:
			return { ...state, authenticated: true };
		default:
			return state
	}
}
