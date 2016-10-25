// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import personsReducer from './persons';

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: personsReducer
});

export default rootReducer;
