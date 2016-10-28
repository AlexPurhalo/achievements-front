// Import of helpers and configuration from test helper file
import { nock, expect, mockStore } from '../test_helper';

// Actions import
import { createPerson, fetchAllPersons } from '../../src/actions/persons';

describe('Persons async actions', () => {
	// cleans data from mockStore after test processing
	afterEach(() => {
		nock.cleanAll()
	});

	const ROOT_URL = 'http://localhost:5000'; // API url for future data manipulation through requests

	it('GET request to fetch the users', () => {
		// objects from array in response
		const user1 = { id: 1, username: "Alex", enc_password: "7sFuEP4tcw0=", access_token:"-agp0jdI1HOtorxBstayYg" },
					user2 = { id: 2, username: "Born", enc_password: "5sJmE/Yuew4O", access_token:"sKgugOyO2Vzs84QIadovwQ" };

		// get request to fetch data from the server
		nock(ROOT_URL)
			.get('/users')
			.reply(200, [user1, user2]);

		// expected output from response
		const expectedOutput = [{ type: 'fetch_all_persons', payload: [user1, user2] }];

		const store = mockStore([]); // empty store for action's data pushing

		// expectation verification
		return store.dispatch(fetchAllPersons())
			.then(() => { // return of async actions
				expect(store.getActions()).to.eql(expectedOutput)
			})
	});

	it('POST request to create user', () => {
		const inputData = { username: 'alexanderpurhalo', enc_password: '7sFuEP4tcw0=' },
					outputData = { id: 1, username: "alexanderpurhalo", enc_password: "7sFuEP4tcw0=" };

		nock(ROOT_URL)
			.post('/users', inputData)
			.reply(201, [outputData]);

		const expectedOutput = [{ type: 'create_person_success', payload: [outputData]}];

		const store = mockStore([]);

		return store.dispatch(createPerson('alexanderpurhalo', '7sFuEP4tcw0='))
			.then(() => {
				expect(store.getActions()).to.eql(expectedOutput)
			});
	});
});
