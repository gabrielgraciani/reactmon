import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';
import { findIndex, filter } from 'lodash';

import * as actions from '../actions/pokemon';
import Pokemon from '../../services/pokemon';

function* pokemonSendWorker(data) {
	try {
		const {nome, tipo, altura, peso, fraquezas, imagem} = data.payload;

		let newDoc = db.collection('pokemon').doc();
		const id = newDoc.id;
		newDoc.set({
			nome,
			tipo,
			altura,
			peso,
			fraquezas,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		const {url, name} = yield call(Pokemon.saveImage, imagem, id);
		yield put (actions.pokemonSavedSuccess({
			id,
			nome,
			tipo,
			altura,
			peso,
			fraquezas,
			imagem: {
				name,
				url
			},
		}));

		yield put(actions.pokemonCloseForm());

	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* pokemonFetchWorker() {
	try {
		const { last, endInfiniteScroll } = yield select(store => store.pokemon);

		const {pokemon, lastVisible, end} = yield call(Pokemon.getPokemons, last, endInfiniteScroll);
		yield put(actions.pokemonFullFilled(pokemon, lastVisible, end));

	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* pokemonDeleteWorker(data){
	try{
		const id = data.payload;
		db.collection('pokemon').doc(id).delete().then(() => {
			console.log("pokemon deletado com sucesso");
		});

		const { list } = yield select(store => store.pokemon);
		const updatedList = filter([...list], pokemon => pokemon.id !== id);

		yield put(actions.pokemonUpdateList(updatedList));
	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* pokemonShowEditWorker(data){
	try{
		yield put(actions.pokemonEditFullFilled(data.payload));

	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* pokemonUpdateWorker(data){
	try {

		const {id, nome, tipo, altura, peso, fraquezas, imagem} = data.payload;

		const { list } = yield select(store => store.pokemon);
		const i = findIndex(list, { id });
		const updatedList = [...list];

		if (i !== -1) {

			yield db.collection('pokemon').doc(id).update({
				nome,
				tipo,
				altura,
				peso,
				fraquezas,
			});

			if(imagem.lastModified){
				const {url, name} = yield call(Pokemon.saveImage, imagem, id);

				updatedList[i] = {
					id,
					nome,
					tipo,
					altura,
					peso,
					fraquezas,
					imagem: {
						name,
						url
					},
				};
				yield put(actions.pokemonUpdateList(updatedList));
			}else{
				updatedList[i] = {
					id,
					nome,
					tipo,
					altura,
					peso,
					fraquezas,
					imagem: {
						name: imagem.name,
						url: imagem.url
					},
				};
				yield put(actions.pokemonUpdateList(updatedList));
			}

			yield put(actions.pokemonCloseForm());

		}

	} catch(error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}


function* pokemonFetchSearchWorker() {
	try {
		const {pokemon} = yield call(Pokemon.getFullPokemons);

		yield put(actions.pokemonFetchSearchSuccess(pokemon));
	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* pokemonSlugFetchWorker(data){
	try{
		const id = data.payload;
		const listSlug = yield call(Pokemon.getPokemonSlug, id);

		yield put(actions.pokemonSlugFetchSuccess([listSlug]));
	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* pokemonSendWatcher() {
	yield takeLatest(actions.POKEMON_SEND, pokemonSendWorker);
}

function* pokemonFetchWatcher() {
	yield takeLatest(actions.POKEMON_FETCH, pokemonFetchWorker);
}

function* pokemonDeleteWatcher(){
	yield takeLatest(actions.POKEMON_DELETE, pokemonDeleteWorker);
}

function* pokemonShowEditWatcher(){
	yield takeLatest(actions.POKEMON_SHOW_EDIT, pokemonShowEditWorker);
}

function* pokemonUpdateWatcher(){
	yield takeLatest(actions.POKEMON_UPDATE, pokemonUpdateWorker);
}

function* pokemonFetchSearchWatcher() {
	yield takeLatest(actions.POKEMON_FETCH, pokemonFetchSearchWorker);
}

function* pokemonSlugFetchWatcher(){
	yield takeLatest(actions.POKEMON_SLUG_FETCH, pokemonSlugFetchWorker);
}

function* pokemonWatcher() {
	yield all([
		pokemonSendWatcher(),
		pokemonFetchWatcher(),
		pokemonDeleteWatcher(),
		pokemonShowEditWatcher(),
		pokemonUpdateWatcher(),
		pokemonFetchSearchWatcher(),
		pokemonSlugFetchWatcher()
	]);
}

export default pokemonWatcher;
