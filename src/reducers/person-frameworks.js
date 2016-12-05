// Initial states for reducers
export const INITIAL_STATE = {
	frameworks: null
};

// Action types import
import { FETCH_PERSON_FRAMEWORKS_SUCCESS } from '../constants/person-frameworks';

// Actions reducing and state returning
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_PERSON_FRAMEWORKS_SUCCESS:
			// console.log(`person frameworks from reducer: ${action.payload}`);
			return { ...state, frameworks: action.payload };
		default:
			return state;
	}
}
