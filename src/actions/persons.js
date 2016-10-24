// Node modules import
import axios from 'axios';
import { browserHistory } from 'react-router';

// API service address
const ROOT_URL = 'https://achievements-back.herokuapp.com';

export function createPerson(username, password) {
	return function() {
		const data = {
			username: username,
			enc_password: password
		};

		axios.post(`${ROOT_URL}/users`, data)
			.then(response => { console.log(response) })
	}
}

