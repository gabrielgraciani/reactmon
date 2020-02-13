import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';
import { findIndex, filter } from 'lodash';

import * as actions from '../actions/item';
import Item from '../../services/item';

function* itemSendWorker(data) {
	try {
		const {nome, descricao} = data.payload;

		let newDoc = db.collection('item').doc();
		console.log(newDoc.id);
		const id = newDoc.id;
		newDoc.set({
			nome,
			descricao,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		yield put (actions.itemSavedSuccess({
			id,
			nome,
			descricao
		}));

		yield put(actions.itemCloseForm());

	} catch (error) {
		console.log('error', error);
	}
}

function* itemFetchWorker(payload) {
	try {
		let last = payload.last;

		const fetch = yield call(Item.getItens, last);
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

		const { list } = yield select(store => store.item);
		const updatedList = filter([...list], item => item.id !== id);

		yield put(actions.itemUpdateList(updatedList));
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
	try {

		const {id, nome, descricao} = data.payload;

		const { list } = yield select(store => store.item);
		const i = findIndex(list, { id });
		const updatedList = [...list];

		if (i !== -1) {

			yield db.collection('item').doc(id).update({
				nome,
				descricao
			});

			updatedList[i] = {
				id,
				nome,
				descricao
			};
			yield put(actions.itemUpdateList(updatedList));
			yield put(actions.itemCloseForm());

		}

	} catch(error) {
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
