import { takeLatest, all, put, call } from 'redux-saga/effects';
import {db} from 'services/firebase';

import * as actions from '../actions/item';
import Item from '../../services/item';
import {activeClass, desactiveClass} from '../actions/activeClass';

function* itemSendWorker(data) {
	try {
		const {nome, descricao} = data.payload;
		/*console.log(nome, descricao);*/
		console.log("data payload", data.payload, "data teste", data.teste);

		db.collection('item').add({
		id: Math.random(),
		nome,
		descricao
		}).then(function(docRef){
			db.collection('item').doc(docRef.id).update({
				id: docRef.id
			});
		});
			/*yield put (actions.itemSavedSuccess({
				nome,
				descricao
			}));*/

			yield put(actions.itemFetch());
			yield put(desactiveClass());

	} catch (error) {
		console.log('error', error);
	}
}

function* itemFetchWorker() {
	try {

		const fetch = yield call(Item.getItens);
		yield put(actions.itemFullFilled(fetch));

	} catch (error) {
		console.log('error', error);
	}
}

function* itemDeleteWorker(data){
	try{
		const id = data.payload;
		db.collection('item').doc(id).delete().then(() => {
			console.log("item deletado com sucesso");
		});

		yield put(actions.itemFetch());
	} catch(error){
		console.log('error', error);
	}
}

function* itemShowEditWorker(data){
	try{
		console.log('id: ', data.payload);

		yield put(actions.itemEditFullFilled(data.payload));
		yield put(activeClass());

	} catch(error){
		console.log('error', error);
	}
}

function* itemSendWatcher() {
	yield takeLatest(actions.ITEM_SEND, itemSendWorker);
}

function* itemFetchWatcher() {
	yield takeLatest(actions.ITEM_FETCH, itemFetchWorker);
}

function* itemDeleteWatcher(){
	yield takeLatest(actions.ITEM_DELETE, itemDeleteWorker);
}

function* itemShowEditWatcher(){
	yield takeLatest(actions.ITEM_SHOW_EDIT, itemShowEditWorker);
}

function* itemWatcher() {
	yield all([
		itemSendWatcher(),
		itemFetchWatcher(),
		itemDeleteWatcher(),
		itemShowEditWatcher()
	]);
}

export default itemWatcher;
