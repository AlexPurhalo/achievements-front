// Node modules import
import axios from 'axios';

// API service address
const ROOT_URL = 'http://localhost:5000';

// Actions types import
import {
	FETCH_PERSON_FRAMEWORKS_SUCCESS,
	FETCH_PERSON_FRAMEWORKS_FAILURE
} from '../constants/person-frameworks';

// Fetches data about person skills
export function fetchPersonFrameworks(personId) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users/${personId}/frameworks`)
			.then(res => dispatch(fetchPersonFrameworksSuccess(res)))
			.catch(req => dispatch(fetchPersonFrameworksFailure(req.response.data.errors)))
	}
}

function fetchPersonFrameworksSuccess(data) {
	console.log(data);
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
