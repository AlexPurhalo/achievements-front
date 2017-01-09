// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import personsReducer from './persons';
import flashMessagesReducer from './flash-messages';
import sessionsReducer from './sessions';
import personFrameworksReducer from './person-frameworks';
import personAchievementsReducer from './achievements';
import personWorksReducer from './works';

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: personsReducer,
	flashMessages: flashMessagesReducer,
	sessions: sessionsReducer,
	personFrameworks: personFrameworksReducer,
	personAchievements: personAchievementsReducer,
	personWorks: personWorksReducer
});

export default rootReducer;
