// Action types import
import {
	CREATE_PERSON_SUCCESS,
	CREATE_PERSON_FAILURE,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_FAILURE,
	FETCH_ALL_PERSONS
} from '../constants/persons';

// Initial states for reducers
const INITIAL_STATE = {
	single_person: {},
	all_persons: [],
	errors: []
};

// Actions reducing and state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_PERSON_SUCCESS:
			return { ...state, single_person: action.payload };
		case CREATE_PERSON_FAILURE:
			return { ...state, errors: action.payload };
		case FETCH_ALL_PERSONS:
			return { ...state, all_persons: action.payload };
		case FETCH_PERSON_SUCCESS:
			console.log(action.payload);
			return { ...state, single_person: action.payload };
		case FETCH_PERSON_FAILURE:
			console.log(action.payload);
			return { ...state, errors: action.payload };
		default:
			return state;
	}
}
