import { takeLatest, all, put } from 'redux-saga/effects';
import {db} from 'services/firebase';

import * as actions from '../actions/item';

function* sendItemWorker(data) {
	try {
		const {nome, descricao} = data.payload;
		/*console.log(nome, descricao);*/

		db.collection('item').add({
		id: Math.random(),
		nome,
		descricao
		}).then(function(docRef){
			db.collection('item').doc(docRef.id).update({
				id: docRef.id
			});
		});
			yield put (actions.itemSavedSuccess());


	} catch (error) {
		console.log('error', error);
	}
}

function* sendItemWatcher() {
	yield takeLatest(actions.ITEM_SEND, sendItemWorker);
}

function* itemWatcher() {
	yield all([
		sendItemWatcher()
	]);
}

export default itemWatcher;
