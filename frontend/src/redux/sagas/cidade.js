import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';
import { findIndex, filter } from 'lodash';

import * as actions from '../actions/cidade';
import Cidade from '../../services/cidade';

function* cidadeSendWorker(data) {
	try {
		const {nome, descricao, imagem} = data.payload;

		let newDoc = db.collection('cidade').doc();
		const id = newDoc.id;
		newDoc.set({
			nome,
			descricao,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		const {url, name} = yield call(Cidade.saveImage, imagem, id);
		yield put (actions.cidadeSavedSuccess({
			id,
			nome,
			descricao,
			imagem: {
				name,
				url
			},
		}));

		yield put(actions.cidadeCloseForm());

	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* cidadeFetchWorker() {
	try {
		const { last, endInfiniteScroll } = yield select(store => store.cidade);

		const {cidade, lastVisible, end} = yield call(Cidade.getCidades, last, endInfiniteScroll);
		yield put(actions.cidadeFullFilled(cidade, lastVisible, end));

	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* cidadeDeleteWorker(data){
	try{
		const id = data.payload;
		db.collection('cidade').doc(id).delete().then(() => {
			console.log("cidade deletado com sucesso");
		});

		const { list } = yield select(store => store.cidade);
		const updatedList = filter([...list], cidade => cidade.id !== id);

		yield put(actions.cidadeUpdateList(updatedList));
	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* cidadeShowEditWorker(data){
	try{
		yield put(actions.cidadeEditFullFilled(data.payload));

	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* cidadeUpdateWorker(data){
	try {

		const {id, nome, descricao, imagem} = data.payload;

		const { list } = yield select(store => store.cidade);
		const i = findIndex(list, { id });
		const updatedList = [...list];

		if (i !== -1) {

			yield db.collection('cidade').doc(id).update({
				nome,
				descricao,
			});

			if(imagem.lastModified){
				const {url, name} = yield call(Cidade.saveImage, imagem, id);

				updatedList[i] = {
					id,
					nome,
					descricao,
					imagem: {
						name,
						url
					},
				};
				yield put(actions.cidadeUpdateList(updatedList));
			}else{
				updatedList[i] = {
					id,
					nome,
					descricao,
					imagem: {
						name: imagem.name,
						url: imagem.url
					},
				};
				yield put(actions.cidadeUpdateList(updatedList));
			}

			yield put(actions.cidadeCloseForm());

		}

	} catch(error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}


function* cidadeFetchSearchWorker() {
	try {
		const {cidade} = yield call(Cidade.getFullCidades);

		yield put(actions.cidadeFetchSearchSuccess(cidade));
	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* cidadeSendWatcher() {
	yield takeLatest(actions.CIDADE_SEND, cidadeSendWorker);
}

function* cidadeFetchWatcher() {
	yield takeLatest(actions.CIDADE_FETCH, cidadeFetchWorker);
}

function* cidadeDeleteWatcher(){
	yield takeLatest(actions.CIDADE_DELETE, cidadeDeleteWorker);
}

function* cidadeShowEditWatcher(){
	yield takeLatest(actions.CIDADE_SHOW_EDIT, cidadeShowEditWorker);
}

function* cidadeUpdateWatcher(){
	yield takeLatest(actions.CIDADE_UPDATE, cidadeUpdateWorker);
}

function* cidadeFetchSearchWatcher() {
	yield takeLatest(actions.CIDADE_FETCH, cidadeFetchSearchWorker);
}

function* cidadeWatcher() {
	yield all([
		cidadeSendWatcher(),
		cidadeFetchWatcher(),
		cidadeDeleteWatcher(),
		cidadeShowEditWatcher(),
		cidadeUpdateWatcher(),
		cidadeFetchSearchWatcher()
	]);
}

export default cidadeWatcher;
