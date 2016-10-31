// Constants import
import { CREATE_SESSION_SUCCESS, DESTROY_SESSION } from '../constants/sessions';

const INITIAL_STATE = {
	authenticated: false
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_SESSION_SUCCESS:
			return { ...state, authenticated: true };
		case DESTROY_SESSION:
			return { ...state, authenticated: false };
		default:
			return state
	}
}
