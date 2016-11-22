// Initial states for reducers
export const INITIAL_STATE = {
	message: null
};

// Action types import
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/flash-messages';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ADD_FLASH_MESSAGE:
			return { ...state, message: action.payload };
		case DELETE_FLASH_MESSAGE:
			return { ...state, message: null };
		default:
			return state;
	}
}
