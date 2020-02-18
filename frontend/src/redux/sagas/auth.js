import { takeLatest, all, put, delay, call } from 'redux-saga/effects';
import firebase from 'services/firebase';

import * as actions from '../actions/auth';
import Auth from '../../services/auth';

function* authSendCadastroWorker(data) {
	try {
		const {nome, email, senha} = data.payload;


		const res = yield call(Auth.registerUser, nome, email, senha);

		let mensagem = '';
		let success = false;
		if(res === 'auth/email-already-in-use'){
			//mensagem = 'Email já em uso';
			mensagem = 1;
			console.log('email ja em uso');
			yield put (actions.authSendCadastroSuccess(mensagem, success));
		}
		else{
			success = true;
			yield put (actions.authSendCadastroSuccess(mensagem, success));
			yield delay(1000);
			yield put(actions.authCloseForm());
		}



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

function* authLogoutWorker(){
	try{
		firebase.auth().signOut().then(() => {
			console.log('deslogou!');
		});

		yield put(actions.authLogoutSuccess());
	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* authCheckUserLoggedInWorker(){
	try{

		const {usuario, checkUserLoggedIn} = yield call(Auth.checkUserLoggedIn);
		yield put(actions.authCheckUserLoggedInSuccess(usuario, checkUserLoggedIn));

		if(checkUserLoggedIn){
			yield delay(1000);
			yield put(actions.authCheckUserLoggedInSuccess(usuario, false));
		}

	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* authLoginGithubWorker(){
	try{
		const usuario = yield call(Auth.loginGithub);

		yield put(actions.authSendLoginSuccess(null, usuario));

	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* authSendCadastroWatcher() {
	yield takeLatest(actions.AUTH_SEND_CADASTRO, authSendCadastroWorker);
}

function* authSendLoginWatcher(){
	yield takeLatest(actions.AUTH_SEND_LOGIN, authSendLoginWorker);
}

function* authLogoutWatcher(){
	yield takeLatest(actions.AUTH_LOGOUT, authLogoutWorker);
}

function* authCheckUserLoggedInWatcher(){
	yield takeLatest(actions.AUTH_CHECK_USER_LOGGED_IN, authCheckUserLoggedInWorker);
}

function* authLoginGithubWatcher(){
	yield takeLatest(actions.AUTH_LOGIN_GITHUB, authLoginGithubWorker);
}

function* authWatcher() {
	yield all([
		authSendCadastroWatcher(),
		authSendLoginWatcher(),
		authLogoutWatcher(),
		authCheckUserLoggedInWatcher(),
		authLoginGithubWatcher()
	]);
}

export default authWatcher;