import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';
import { findIndex, filter } from 'lodash';

import * as actions from '../actions/item';
import Item from '../../services/item';

function* itemSendWorker(data) {
	try {
		const {nome, descricao, changeFile} = data.payload;

		let newDoc = db.collection('item').doc();
		console.log(newDoc.id);
		const id = newDoc.id;
		newDoc.set({
			nome,
			descricao,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		/*começo da função para salvar imagem*/
		const storageRef = firebase.storage().ref();
		const file = changeFile;
		const metadata = {
			contentType: 'image/jpeg'
		};
		const uploadTask = storageRef.child('images/itens/' + id + '/' + file.name).put(file, metadata);

		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			function(snapshot) {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED:
						console.log('Upload is paused');
						break;
					case firebase.storage.TaskState.RUNNING:
						console.log('Upload is running');
						break;
					default:
						console.log('certo');
				}
			}, function(error) {

				switch (error.code) {
					case 'storage/unauthorized':
						break;

					case 'storage/canceled':
						break;

					case 'storage/unknown':
						break;
					default:
						console.log('erro');

				}
			}, function() {
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					console.log('File available at', downloadURL);
					console.log(changeFile);

					db.collection('item').doc(id).update({
						imagem: {
							url: downloadURL,
							name: changeFile.name
						},
					});
				});
			});
		/*fim da função para salvar imagem*/

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

function* itemFetchWorker() {
	try {
		const { last, endInfiniteScroll } = yield select(store => store.item);

		const {item, lastVisible, end} = yield call(Item.getItens, last, endInfiniteScroll);
		console.log('item', item);
		yield put(actions.itemFullFilled(item, lastVisible, end));

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
