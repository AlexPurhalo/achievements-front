// Node modules import
import axios from 'axios';

// API service address
const ROOT_URL = 'http://localhost:5000';

// Actions types import
import {
	FETCH_PERSON_FRAMEWORKS_SUCCESS,
	FETCH_PERSON_FRAMEWORKS_FAILURE,
	ADD_PERSON_FRAMEWORK_SUCCESS,
	ADD_PERSON_FRAMEWORK_FAILURE
} from '../constants/person-frameworks';

// Fetches data about person frameworks
export function fetchPersonFrameworks(personId) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users/${personId}/frameworks`)
			.then(res => dispatch(fetchPersonFrameworksSuccess(res.data)))
			.catch(req => dispatch(fetchPersonFrameworksFailure(req.response.data.errors)))
	}
}

function fetchPersonFrameworksSuccess(data) {
	// console.log(`fetch person frameworks  success action: ${data}`);
	return {
		type: FETCH_PERSON_FRAMEWORKS_SUCCESS,
		payload: data
	}
}

function fetchPersonFrameworksFailure(errors) {
	return {
		type: FETCH_PERSON_FRAMEWORKS_FAILURE,
		payload: errors
	}
}


// Pushes new framework to list of user's frameworks
export function addPersonFramework(personId, framework) {
	const data = { framework: framework };
	console.log(data);
	return function(dispatch) {
		return axios.post(`${ROOT_URL}/users/${personId}/frameworks`, data)
			.then(res => dispatch(addPersonFrameworkSuccess(res.data)))
			.catch(req => dispatch(addPersonFrameworkFailure(req.response.data.errors)))
	}
}

function addPersonFrameworkSuccess(data) {
	console.log(`data from add person framework action: ${data}`);
	return {
		type: ADD_PERSON_FRAMEWORK_SUCCESS,
		payload: data
	}
}

function addPersonFrameworkFailure(errors) {
	console.log(`errors from add person framework action`);
	return {
		type: ADD_PERSON_FRAMEWORK_FAILURE,
		payload: errors
	}
}
