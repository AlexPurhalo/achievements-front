// Action types import
import { CREATE_PERSON, CREATE_PERSON_ERRORS } from '../actions/types';

// Initial states import
import { INITIAL_STATE } from './initial_state';

// Actions reducing and state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_PERSON:
			return { ...state, all_persons: action.payload };
		case CREATE_PERSON_ERRORS:
			return { ...state, errors: action.payload };
		default:
			return state;
	}
}
