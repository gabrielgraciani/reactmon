import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';
import { findIndex, filter } from 'lodash';

import * as actions from '../actions/item';
import Item from '../../services/item';

function* itemSendWorker(data) {
	try {
		const {nome, descricao, funcao, imagem} = data.payload;

		let newDoc = db.collection('item').doc();
		const id = newDoc.id;
		newDoc.set({
			nome,
			descricao,
			funcao,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		const {url, name} = yield call(Item.saveImage, imagem, id);
		yield put (actions.itemSavedSuccess({
			id,
			nome,
			descricao,
			funcao,
			imagem: {
				name,
				url
			},
		}));

		yield put(actions.itemCloseForm());

	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* itemFetchWorker() {
	try {
		const { last, endInfiniteScroll } = yield select(store => store.item);

		const {item, lastVisible, end} = yield call(Item.getItens, last, endInfiniteScroll);
		yield put(actions.itemFullFilled(item, lastVisible, end));

	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
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
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* itemShowEditWorker(data){
	try{
		yield put(actions.itemEditFullFilled(data.payload));

	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* itemUpdateWorker(data){
	try {

		const {id, nome, descricao, funcao, imagem} = data.payload;

		const { list } = yield select(store => store.item);
		const i = findIndex(list, { id });
		const updatedList = [...list];

		if (i !== -1) {

			yield db.collection('item').doc(id).update({
				nome,
				descricao,
				funcao
			});

			if(imagem.lastModified){
				const {url, name} = yield call(Item.saveImage, imagem, id);

				updatedList[i] = {
					id,
					nome,
					descricao,
					funcao,
					imagem: {
						name,
						url
					},
				};
				yield put(actions.itemUpdateList(updatedList));
			}else{
				updatedList[i] = {
					id,
					nome,
					descricao,
					funcao,
					imagem: {
						name: imagem.name,
						url: imagem.url
					},
				};
				yield put(actions.itemUpdateList(updatedList));
			}

			yield put(actions.itemCloseForm());

		}

	} catch(error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}


function* itemFetchSearchWorker() {
	try {
		const {item} = yield call(Item.getFullItens);

		yield put(actions.itemFetchSearchSuccess(item));
	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
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

function* itemFetchSearchWatcher() {
	yield takeLatest(actions.ITEM_FETCH, itemFetchSearchWorker);
}

function* itemWatcher() {
	yield all([
		itemSendWatcher(),
		itemFetchWatcher(),
		itemDeleteWatcher(),
		itemShowEditWatcher(),
		itemUpdateWatcher(),
		itemFetchSearchWatcher()
	]);
}

export default itemWatcher;
