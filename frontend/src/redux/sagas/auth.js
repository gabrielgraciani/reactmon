import { takeLatest, all, put, delay } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';

import * as actions from '../actions/auth';

function* authSendCadastroWorker(data) {
	try {
		const {nome, email, senha} = data.payload;

		let newDoc = db.collection('usuarios').doc();
		newDoc.set({
			nome,
			email,
			senha,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		yield put (actions.authSendCadastroSuccess());

		yield delay(1000);
		yield put(actions.authCloseForm());

	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* authSendCadastroWatcher() {
	yield takeLatest(actions.AUTH_SEND_CADASTRO, authSendCadastroWorker);
}

function* authWatcher() {
	yield all([
		authSendCadastroWatcher(),
	]);
}

export default authWatcher;