import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export default class pokemon {

	static getPokemons(data) {
		return axios.get(`${API_URL}api/v1/pokemon`);
	}

}
