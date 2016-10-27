// Test helper's stuff
import { expect } from '../test_helper';

// Reducers and Action Types import
import personsReducer from '../../src/reducers/persons';
import { CREATE_PERSON, CREATE_PERSON_ERRORS } from '../../src/constants/persons';

// Test situations
describe('Persons Reducer', () => {
	it('handles action with unknown type', () => {
		expect(personsReducer(undefined, {})).to.eql({ single_person: {}, all_persons: [], errors: [] } );
	});

	it('handles action of type CREATE_PERSON', () => {
		const action = { type: CREATE_PERSON, payload: {id: 2, username: 'Alex', password: 'FoPsPEMKxhms5A=='} };
		expect(personsReducer([], action)).to.eql(
			{ single_person: { id: 2, username: 'Alex', password: 'FoPsPEMKxhms5A==' } }
		);
	});

	it('handles action of type CREATE_PERSON_ERRORS', () => {
		const action = { type: CREATE_PERSON_ERRORS, payload: ['email in use']};
		expect(personsReducer([], action)).to.eql({ errors: ['email in use']})
	})
});
