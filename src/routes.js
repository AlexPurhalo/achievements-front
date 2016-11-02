// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Persons from './components/persons/persons-list';
import NewPerson from './components/persons/new-person';
import NewSession from './components/sessions/new-session';
import ShowPerson from './components/persons/show-person';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Persons} />
		<Route path='persons/new' component={NewPerson} />
		<Route path='sessions/new' component={NewSession} />
		<Route path='persons/:id' component={ShowPerson} />
	</Route>
);
