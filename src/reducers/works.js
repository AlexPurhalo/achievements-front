// Initial states for reducers
export const INITIAL_STATE = { works: null };

// Action types import
import { FETCH_WORKS_SUCCESS } from '../constants/works';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_WORKS_SUCCESS:
			return { ...state, works: action.payload };
		default:
			return state
	}
}
