import firebase from 'services/firebase';

export default class auth{
	static registerUser = (nome, email, senha) => {
		return new Promise((res, rej) => {
			firebase.auth().createUserWithEmailAndPassword(email, senha).then(function(user){
				const userLogado = user.user;
				userLogado.updateProfile({
					displayName: nome
				});
				res(1);
			}).catch(function(error) {
				console.log(`erro ao cadastrar: , ${error.code}, ${error.message}`);
				res(error.code);

			});
		})
	};

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

	static loginGithub = () => {
		return new Promise((res, rej) => {
			console.log('chegou aqui2');
			const provider = new firebase.auth.GithubAuthProvider();
			firebase.auth().signInWithRedirect(provider);
			console.log('chegou aqui3');
		})
	}
}