// Node modules import
import axios from 'axios';
import bcrypt from 'bcrypt-nodejs';
import FormData from 'form-data'


// API service address
import { ROOT_URL } from '../constants/index';

// Actions types import
import {
	CREATE_PERSON_SUCCESS,
	CREATE_PERSON_FAILURE,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_FAILURE,
	FETCH_ALL_PERSONS_SUCCESS,
	FETCH_ALL_PERSONS_FAILURE,
	UPDATE_PERSON_SUCCESS,
	UPDATE_PERSON_FAILURE
} from '../constants/persons';

// Calls function that creates person or fetches error message
export function createPerson(username, password) {
	return function(dispatch) {
		const hashedPassword = bcrypt.hashSync(password),
			data = { username: username, password: hashedPassword };

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
	return {
		type: FETCH_PERSON_SUCCESS,
		payload: data
	}
}

function fetchPersonFailure(errors) {
	return {
		type: FETCH_PERSON_FAILURE,
		payload: errors
	}
}


// Shows all persons
export function fetchAllPersons(pageNum) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users?page=${pageNum}`)
			.then(res => dispatch(fetchAllPersonsSuccess(res.data)))
			.catch(req => dispatch(fetchAllPersonsFailure(req.response.data.errors)));
	}
}

function fetchAllPersonsSuccess(data) {
	return {
		type: FETCH_ALL_PERSONS_SUCCESS,
		payload: data
	}
}

function fetchAllPersonsFailure(errors) {
	return {
		type: FETCH_ALL_PERSONS_FAILURE,
		payload: errors
	}
}


// Updates person
export function updatePerson(id, data) {
	const headers = { headers: { 'X-Access-Token': localStorage.getItem('token') } };
	return function(dispatch) {
		return axios.put(`${ROOT_URL}/users/${id}`, data, headers )
			.then(res => dispatch(updatePersonSuccess(res.data)))
			.catch(req => dispatch(updatePersonFailure(req.response.data.errors)));
	}
}

function updatePersonSuccess(data) {
	return {
		type: UPDATE_PERSON_SUCCESS,
		payload: data
	}
}

function updatePersonFailure(errors) {
	return {
		type: UPDATE_PERSON_FAILURE,
		payload: errors
	}
}


// // Updates person's avatar
export function updatePersonAvatar(id, file) {
	let data = new FormData();
	const headers = {
		headers: {
			'X-Access-Token': localStorage.getItem('token'),
			'Content-Type': undefined
		}
	};
	data.append('avatar', file);

	return function(dispatch) {
		return axios.put(`${ROOT_URL}/users/${id}`, data, headers )
			.then(res => dispatch(updatePersonSuccess(res.data)))
			.catch(req => dispatch(updatePersonFailure(req.response.data.errors)));
	}
}
