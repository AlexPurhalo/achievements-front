// Node modules import
import axios from 'axios';

// API service address
import { ROOT_URL } from '../constants/index';

// Actions types import
import {
	FETCH_WORKS_SUCCESS,
	FETCH_WORKS_FAILURE
} from '../constants/works';

// Fetches person's the works list
export function fetchWorks(personId) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users/${personId}/works`)
			.then(res => dispatch(fetchWorksSuccess(res.data)))
			.catch(req => dispatch(fetchWorksFailure(req.response.data.errors)))
	}
}
function fetchWorksSuccess(data) {
	return {
		type: FETCH_WORKS_SUCCESS,
		payload: data
	}
}
function fetchWorksFailure(errors) {
	return {
		type: FETCH_WORKS_FAILURE,
		payload: errors
	}
}
