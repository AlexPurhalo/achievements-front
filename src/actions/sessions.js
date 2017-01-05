// Node modules import
import axios from 'axios';

// API service address
const ROOT_URL = 'https://achievements-project.herokuapp.com';

// Actions types import
import { CREATE_SESSION_SUCCESS, CREATE_SESSION_FAILURE, DESTROY_SESSION } from '../constants/sessions';

export function createSession(username, password) {
	return function(dispatch) {
		const data = { username: username, password: password };

		return axios.post(`${ROOT_URL}/sessions`, data)
			.then(res => dispatch(createSessionSuccess(res.data)))
			.catch(req => dispatch(createSessionFailure(req.response.data.errors)));
	}
}

function createSessionSuccess(data) {
	return {
		type: CREATE_SESSION_SUCCESS,
		payload: data
	}
}

function createSessionFailure(data) {
	console.log(data);
	return {
		type: CREATE_SESSION_FAILURE,
		payload: data
	}
}

export function destroySession() {
	return { type: DESTROY_SESSION }
}
