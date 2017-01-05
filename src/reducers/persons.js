// Action types import
import {
	CREATE_PERSON_SUCCESS,
	CREATE_PERSON_FAILURE,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_FAILURE,
	FETCH_ALL_PERSONS_SUCCESS,
	FETCH_ALL_PERSONS_FAILURE,
	UPDATE_PERSON_SUCCESS,
	UPDATE_PERSON_FAILURE
} from '../constants/persons';

// Initial states for reducers
const INITIAL_STATE = {
	single_person: null,
	all_persons: [],
	errors: [],
	users_page_info: { obj: 'go'}
};

// Actions reducing and state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_PERSON_SUCCESS:
			return { ...state, single_person: action.payload };
		case CREATE_PERSON_FAILURE:
			return { ...state, errors: action.payload };
		case FETCH_PERSON_SUCCESS:
			return { ...state, single_person: action.payload };
		case FETCH_PERSON_FAILURE:
			return { ...state, errors: action.payload };
		case FETCH_ALL_PERSONS_SUCCESS:
			return { ...state, all_persons: action.payload.users, users_page_info: action.payload.meta };
		case FETCH_ALL_PERSONS_FAILURE:
			return { ...state, errors: action.payload };
		case UPDATE_PERSON_SUCCESS:
			return { ...state, single_person: action.payload };
		case UPDATE_PERSON_FAILURE:
			return { ...state, update_errors: action.payload };
		default:
			return state;
	}
}
