import { takeLatest, all, call, put } from 'redux-saga/effects';

import * as actions from '../actions/item';

function* sendItemWorker() {
	try {
		yield put(actions.sendItem());

	} catch (error) {
		console.log('error', error);
	}
}

function* sendItemWatcher() {
	yield takeLatest(actions.SEND_ITEM, sendItemWorker);
}

function* itemWatcher() {
	yield all([
		sendItemWatcher()
	]);
}

export default itemWatcher;
