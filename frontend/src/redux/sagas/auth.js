import { takeLatest, all, put, delay, call } from 'redux-saga/effects';
import firebase from 'services/firebase';

import * as actions from '../actions/auth';
import Auth from '../../services/auth';

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

		const usuario = yield call(Auth.checkUser, email, senha);

		let mensagem = '';
		if(usuario.code === 'auth/invalid-email' || usuario.code === 'auth/user-not-found'){
			//mensagem = 'E-mail inválido';
			mensagem = 1;
			yield put(actions.authSendLoginSuccess(mensagem));
		}
		else if(usuario.code === 'auth/wrong-password'){
			//mensagem = 'Senha inválida';
			mensagem = 2;
			yield put(actions.authSendLoginSuccess(mensagem));
		}
		else if(usuario.code === 'auth/too-many-requests'){
			//mensagem = 'Muitas tentativas com falhas, tente novamente mais tarde';
			mensagem = 3;
			yield put(actions.authSendLoginSuccess(mensagem));
		}
		else{
			//console.log(usuario);

			yield put(actions.authSendLoginSuccess(null, usuario));
		}



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