import firebase from 'services/firebase';

export default class auth{
	static checkUser = (email, senha) => {
		return new Promise((res, rej) => {
			firebase.auth().signInWithEmailAndPassword(email, senha).then((user) => {
				 res(user);
			 }).catch((error) => {
				 res(error);
			 });
		})
	};

	static checkUserLoggedIn = () => {
		return new Promise((res, rej) => {
			firebase.auth().onAuthStateChanged((usuario) => {
				if(usuario){
					const checkUserLoggedIn = true;
					res({usuario, checkUserLoggedIn});
				}
				else{
					const checkUserLoggedIn = false;
					res({usuario, checkUserLoggedIn});
				}

			});
		})
	}
}