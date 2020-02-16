import { takeLatest, all, put, delay } from 'redux-saga/effects';
import firebase from 'services/firebase';

import * as actions from '../actions/auth';

function* authSendCadastroWorker(data) {
	try {
		const {nome, email, senha} = data.payload;

		firebase.auth().createUserWithEmailAndPassword(email, senha).then(function(user){
			const userLogado = user.user;
				userLogado.updateProfile({
					displayName: nome
				});
		}).catch(function(error) {
			alert(`erro ao cadastrar: , ${error.code}, ${error.message}`);
		});

		yield put (actions.authSendCadastroSuccess());
		yield delay(1000);
		yield put(actions.authCloseForm());

	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* authSendLoginWorker(data){
	try{
		const {email, senha} = data.payload;

		firebase.auth().signInWithEmailAndPassword(email, senha).then((user) => {
			 console.log('logou certinho');
			 console.log('u', user);
		 }).catch((error) => {
			 console.log(error);
		 });

		yield put(actions.authSendLoginSuccess);

	} catch(error){
		console.log(`${error}, tente novamente mais tarde`);
	}
}

function* authSendCadastroWatcher() {
	yield takeLatest(actions.AUTH_SEND_CADASTRO, authSendCadastroWorker);
}

function* authSendLoginWatcher(){
	yield takeLatest(actions.AUTH_SEND_LOGIN, authSendLoginWorker);
}

function* authWatcher() {
	yield all([
		authSendCadastroWatcher(),
		authSendLoginWatcher()
	]);
}

export default authWatcher;