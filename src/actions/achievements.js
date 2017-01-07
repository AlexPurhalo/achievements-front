// Node modules import
import axios from 'axios';

// API service address
import { ROOT_URL } from '../constants/index';

// Actions types import
import {
	FETCH_ACHIEVEMENTS_SUCCESS,
	FETCH_ACHIEVEMENTS_FAILURE,
	ADD_ACHIEVEMENT_SUCCESS,
	ADD_ACHIEVEMENT_FAILURE,
	UPDATE_ACHIEVEMENT_SUCCESS,
	UPDATE_ACHIEVEMENT_FAILURE,
	DELETE_ACHIEVEMENT_SUCCESS,
	DELETE_ACHIEVEMENT_FAILURE
} from '../constants/achievements'

// Fetches person achievements
export function fetchAchievements(personId) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/users/${personId}/achievements`)
			.then(res => dispatch(fetchAchievementsSuccess(res.data)))
			.catch(req => dispatch(fetchAchievementsFailure(req.response.data.errors)))
	}
}

function fetchAchievementsSuccess(data) {
	return {
		type: FETCH_ACHIEVEMENTS_SUCCESS,
		payload: data
	}
}

function fetchAchievementsFailure(errors) {
	return {
		type: FETCH_ACHIEVEMENTS_FAILURE,
		payload: errors
	}
}


// Creates a new achievement for person
export function addAchievement(personId, data) {
	return function(dispatch) {
		return axios.post(`${ROOT_URL}/users/${personId}/achievements`, data)
			.then(res => dispatch(addAchievementSuccess(res.data)))
			.catch(req => dispatch(addAchievementFailure(req.response.data.errors)))
	}
}

function addAchievementSuccess(data) {
	return {
		type: ADD_ACHIEVEMENT_SUCCESS,
		payload: data
	}
}

function addAchievementFailure(errors) {
	return {
		type: ADD_ACHIEVEMENT_FAILURE,
		payload: errors
	}
}

// Updates a achievement
export function updateAchievement(personId, achievementId, data) {
	return function(dispatch) {
		return axios.put(`${ROOT_URL}/users/${personId}/achievements/${achievementId}`, data)
			.then(res => dispatch(updateAchievementSuccess(res.data)))
			.catch(req => dispatch(updateAchievementFailure(req.response.data.errors)))
	}
}

function updateAchievementSuccess(data) {
	return {
		type: UPDATE_ACHIEVEMENT_SUCCESS,
		payload: data
	}
}

function updateAchievementFailure(errors) {
	return {
		type: UPDATE_ACHIEVEMENT_FAILURE,
		payload: errors
	}
}

// Deletes a achievement
export function deleteAchievement(personId, achievementId) {
	return function(dispatch) {
		return axios.delete(`${ROOT_URL}/users/${personId}/achievements/${achievementId}`)
			.then(res => dispatch(deleteAchievementSuccess(res.data)))
			.catch(req => dispatch(deleteAchievementFailure(req.response.data.errors)))
	}
}

function deleteAchievementSuccess(data) {
	return {
		type: DELETE_ACHIEVEMENT_SUCCESS,
		payload: data
	}
}

function deleteAchievementFailure(errors) {
	return {
		type: DELETE_ACHIEVEMENT_FAILURE,
		payload: errors
	}
}
