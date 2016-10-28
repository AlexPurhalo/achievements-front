// Node modules import
import axios from 'axios';

// API service address
const ROOT_URL = 'http://localhost:5000';

// Actions types import
import { CREATE_PERSON, CREATE_PERSON_ERRORS, FETCH_ALL_PERSONS } from '../constants/persons';

export function createPerson(username, password) {
	return function(dispatch) {
		const data = {
			username: username,
			enc_password: password
		};

		return axios.post(`${ROOT_URL}/users`, data)
			.then(function(response) {
				console.log(response);
				dispatch({
					type: CREATE_PERSON,
					payload: response.data
				});
			}).catch(request => dispatch(createPersonErrors(request.response.data.errors)));
	}
}

export function createPersonErrors(errors) {
	return {
		type: CREATE_PERSON_ERRORS,
		payload: errors
	}
}

export function fetchAllPersons() {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users`)
			.then(function(response) {
				console.log(response.data);
				dispatch({
					type: FETCH_ALL_PERSONS,
					payload: response.data
				});
			})
	}
}


