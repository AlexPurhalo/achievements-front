// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import personsReducer from './persons';
import flashMessagesReducer from './flash-messages';
import sessionsReducer from './sessions';

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: personsReducer,
	flashMessages: flashMessagesReducer,
	sessions: sessionsReducer
});

export default rootReducer;
