import { takeLatest, all, call, put } from 'redux-saga/effects';

import * as actions from '../actions/pokemon';
import Pokemon from '../../services/pokemon';

function* pokemonFetchWorker() {
	try {
		const { status, data } = yield call(Pokemon.getPokemons);
		const { pokemon } = data;

		if (status === 200) {
			yield put(actions.pokemonFullfilled(pokemon));
		} else {
			throw new Error(status.message);
		}
	} catch (error) {
		console.log('error', error);
	}
}

function* pokemonFetchWatcher() {
	yield takeLatest(actions.POKEMON_FETCH, pokemonFetchWorker);
}

function* pokemonWatcher() {
	yield all([
		pokemonFetchWatcher()
	]);
}

export default pokemonWatcher;
