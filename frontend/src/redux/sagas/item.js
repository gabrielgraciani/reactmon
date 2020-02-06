import { takeLatest, all, put, call } from 'redux-saga/effects';
import {db} from 'services/firebase';

import * as actions from '../actions/item';
import Item from '../../services/item';


function* itemSendWorker(data) {
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

function* itemFetchWorker() {
	try {

		yield put(actions.itemFullFilled(yield call(Item.getItens)));


	} catch (error) {
		console.log('error', error);
	}
}

function* itemSendWatcher() {
	yield takeLatest(actions.ITEM_SEND, itemSendWorker);
}

function* itemFetchWatcher() {
	yield takeLatest(actions.ITEM_FETCH, itemFetchWorker);
}

function* itemWatcher() {
	yield all([
		itemSendWatcher(),
		itemFetchWatcher()
	]);
}

export default itemWatcher;
