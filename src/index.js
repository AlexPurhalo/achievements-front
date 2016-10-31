// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Constant import
import { CREATE_SESSION_SUCCESS } from './constants/sessions';

// Components import via routing
import routes from './routes';

// Styles import
import '../styles/index.scss'


// Reducers import
import reducers from './reducers';

// Store definition with Middleware applying and Rendering of React Document Object Model (DOM)
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore),
	reduced_store = createStoreWithMiddleware(reducers), token = localStorage.getItem('token');

// if token exist changes authenticated flag
token && reduced_store.dispatch({ type: CREATE_SESSION_SUCCESS });

ReactDOM.render(
	<Provider store={reduced_store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.querySelector('#react-application')
);
