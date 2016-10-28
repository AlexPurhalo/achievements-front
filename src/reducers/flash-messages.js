// Initial states import
import { INITIAL_STATE } from './init_states/flash-messages';

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
