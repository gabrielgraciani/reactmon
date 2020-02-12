import { takeLatest, all, put, call } from 'redux-saga/effects';
import {db} from 'services/firebase';

import * as actions from '../actions/item';
import Item from '../../services/item';

function* itemSendWorker(data) {
	try {
		const {nome, descricao} = data.payload;
		let id = [];

		db.collection('item').add({
		id: Math.random(),
		nome,
		descricao
		}).then((docRef) => {
			id.push('xd');
			console.log('id', id);
			db.collection('item').doc(docRef.id).update({
				id: docRef.id
			});
		});
		console.log('id2', id);
			/*yield put (actions.itemSavedSuccess({
				nome,
				descricao
			}));*/

			yield put(actions.itemFetch());
			yield put(actions.itemCloseForm());

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
		yield put(actions.itemEditFullFilled(data.payload));

	} catch(error){
		console.log('error', error);
	}
}

function* itemUpdateWorker(data){
	try{
		const {id, nome, descricao} = data.payload;
		db.collection('item').doc(id).update({
			nome,
			descricao
		});
		console.log('editado com sucesso');

		yield put(actions.itemFetch());
		yield put(actions.itemCloseForm());


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

function* itemUpdateWatcher(){
	yield takeLatest(actions.ITEM_UPDATE, itemUpdateWorker);
}

function* itemWatcher() {
	yield all([
		itemSendWatcher(),
		itemFetchWatcher(),
		itemDeleteWatcher(),
		itemShowEditWatcher(),
		itemUpdateWatcher()
	]);
}

export default itemWatcher;
