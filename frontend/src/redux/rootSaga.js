import { all } from 'redux-saga/effects';

import pokemonSaga from './sagas/pokemon';
import itemSaga from './sagas/item';
import authSaga from './sagas/auth';
import cidadeSaga from './sagas/cidade';

export default function* rootSaga() {
	yield all([
		pokemonSaga(),
		itemSaga(),
		authSaga(),
		cidadeSaga()
	]);
}
