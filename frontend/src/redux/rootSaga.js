import { all } from 'redux-saga/effects';

import pokemonSaga from './sagas/pokemon';

export default function* rootSaga() {
	yield all([
		pokemonSaga()
	]);
}
