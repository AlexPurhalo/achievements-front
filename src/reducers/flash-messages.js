// Initial states for reducers
export const INITIAL_STATE = {
	message: {}
};

// Action types import
import { ADD_FLASH_MESSAGE } from '../constants/flash-messages';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ADD_FLASH_MESSAGE:
			return { ...state, message: action.payload };
		default:
			return state;
	}
}
