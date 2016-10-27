// Action types import
import { CREATE_PERSON, CREATE_PERSON_ERRORS, FETCH_ALL_PERSONS } from '../constants/persons';

// Initial states import
import { INITIAL_STATE } from './init_states/persons';

// Actions reducing and state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_PERSON:
			return { ...state, single_person: action.payload };
		case CREATE_PERSON_ERRORS:
			return { ...state, errors: action.payload };
		case FETCH_ALL_PERSONS:
			return { ...state, all_persons: action.payload };
		default:
			return state;
	}
}
