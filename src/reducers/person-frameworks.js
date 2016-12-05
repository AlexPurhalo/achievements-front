// Initial states for reducers
export const INITIAL_STATE = {
	frameworks: null
};

// Action types import
import {
	FETCH_PERSON_FRAMEWORKS_SUCCESS,
	ADD_PERSON_FRAMEWORK_SUCCESS,
	REMOVE_PERSON_FRAMEWORK_SUCCESS
} from '../constants/person-frameworks';

// Actions reducing and state returning
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_PERSON_FRAMEWORKS_SUCCESS:
			// console.log(`person frameworks from reducer: ${action.payload}`);
			return { ...state, frameworks: action.payload };
		case ADD_PERSON_FRAMEWORK_SUCCESS:
			// console.log(`persons frameworks from reducer (after adding): ${action.payload}`);
			return { ...state, frameworks: action.payload };
		case REMOVE_PERSON_FRAMEWORK_SUCCESS:
			// console.log(`person framework ist from reducer (after destroying)`);
			return { ...state, frameworks: action.payload };
		default:
			return state;
	}
}
