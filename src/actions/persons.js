// Node modules import
import axios from 'axios';
import bcrypt from 'bcrypt-nodejs';

// API service address
const ROOT_URL = 'http://localhost:5000';

// Actions types import
import {
	CREATE_PERSON_SUCCESS,
	CREATE_PERSON_FAILURE,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_FAILURE,
	FETCH_ALL_PERSONS
} from '../constants/persons';

// Calls function that creates person or fetches error message
export function createPerson(username, password) {
	return function(dispatch) {
		const hashedPassword = bcrypt.hashSync(password),
					data = { username: username, enc_password: hashedPassword };

		return axios.post(`${ROOT_URL}/users`, data)
			.then(res => dispatch(createPersonSuccess(res)))
			.catch(req => dispatch(createPersonErrors(req.response.data.errors)));
	}
}

// Creates person
function createPersonSuccess(res) {
	return {
		type: CREATE_PERSON_SUCCESS,
		payload: res.data
	}
}

// Shows errors that prevent record from saving in db
function createPersonErrors(errors) {
	return {
		type: CREATE_PERSON_FAILURE,
		payload: errors
	}
}


// Shows person's data
export function fetchPerson(id) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users/${id}`)
			.then(res => dispatch(fetchPersonSuccess(res.data)))
			.catch(req => dispatch(fetchPersonFailure(req.response.data.errors)))
	}
}

function fetchPersonSuccess(data) {
	console.log(data);
	return {
		type: FETCH_PERSON_SUCCESS,
		payload: data
	}
}

function fetchPersonFailure(errors) {
	console.log(errors);
	return {
		type: FETCH_PERSON_FAILURE,
		payload: errors
	}
}


export function fetchAllPersons() {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users`)
			.then(function(response) {
				dispatch({
					type: FETCH_ALL_PERSONS,
					payload: response.data
				});
			})
	}
}


