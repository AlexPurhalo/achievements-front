import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/persons';
import nock from 'nock'
import { expect } from '../test_helper';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Persons async actions', () => {
	afterEach(() => {
		nock.cleanAll()
	});

	it('Fetches users info with GET request', () => {
		nock('http://localhost:5000')
			.get('/users')
			.reply(200, [
				{ id: 1, username: "Alex", enc_password: "7sFuEP4tcw0=", access_token:"-agp0jdI1HOtorxBstayYg" },
				{ id: 2, username: "Born", enc_password: "5sJmE/Yuew4O", access_token:"sKgugOyO2Vzs84QIadovwQ" }
			]);

		const expectedActions = [{ type: 'fetch_all_persons', payload: [
			{ id: 1, username: "Alex", enc_password: "7sFuEP4tcw0=", access_token:"-agp0jdI1HOtorxBstayYg" },
			{ id: 2, username: "Born", enc_password: "5sJmE/Yuew4O", access_token:"sKgugOyO2Vzs84QIadovwQ" }
		] }];

		const store = mockStore([]);

		return store.dispatch(actions.fetchAllPersons())
			.then(() => { // return of async actions
				expect(store.getActions()).to.eql(expectedActions)
			})
	})
});
