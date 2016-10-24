// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Persons from './components/persons/persons-list';
import NewPerson from './components/persons/new-person';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Persons} />
		<Route path='persons/new' component={NewPerson} />
	</Route>
);
