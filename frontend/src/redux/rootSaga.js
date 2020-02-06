import { all } from 'redux-saga/effects';

import pokemonSaga from './sagas/pokemon';
import itemSaga from './sagas/item';

export default function* rootSaga() {
	yield all([
		pokemonSaga(),
		itemSaga()
	]);
}
