import { takeLatest, all, put } from 'redux-saga/effects';
import {db} from 'services/firebase';

import * as actions from '../actions/item';

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
		let item = [];
		db.collection('item').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				console.log(doc.data());
				item.push({
					id: doc.id,
					...doc.data()
				})
			});
			console.log("item: ", item);
			put(actions.itemFullFilled(item));
		});
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
