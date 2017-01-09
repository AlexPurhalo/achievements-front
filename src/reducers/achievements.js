// Initial states for reducers
export const INITIAL_STATE = { achievements: null };

// Action types import
import {
	FETCH_ACHIEVEMENTS_SUCCESS,
	ADD_ACHIEVEMENT_SUCCESS,
	DELETE_ACHIEVEMENT_SUCCESS,
	UPDATE_ACHIEVEMENT_SUCCESS
} from '../constants/achievements';

// Actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_ACHIEVEMENTS_SUCCESS:
			return { ...state, achievements: action.payload };
		case ADD_ACHIEVEMENT_SUCCESS:
			return { ...state, achievements: action.payload };
		case UPDATE_ACHIEVEMENT_SUCCESS:
			return { ...state, achievements: action.payload };
		case DELETE_ACHIEVEMENT_SUCCESS:
			return { ...state, achievements: action.payload };
		default:
			return state
	}
}
