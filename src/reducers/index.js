// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import personsReducer from './persons';
import flashMessagesReducer from './flash-messages'

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: personsReducer,
	flashMessages: flashMessagesReducer
});

export default rootReducer;
