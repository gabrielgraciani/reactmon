import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyD3blW99oykENBSWnwjch4xYXWWuZf2IVU",
	authDomain: "reactmon-55f1b.firebaseapp.com",
	databaseURL: "https://reactmon-55f1b.firebaseio.com",
	projectId: "reactmon-55f1b",
	storageBucket: "reactmon-55f1b.appspot.com",
	messagingSenderId: "172940760428",
	appId: "1:172940760428:web:6f97ef21ed4d6b63e28f49",
	measurementId: "G-L487SHSNG1"
};
// Initialize Firebase
firebase.initializeApp(config);

const login = () => {
	const provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithRedirect(provider)
};

function Login () {
	const [userInfo, setUserInfo] = useState({
		isUserLoggedIn: false,
		user: null
	});

	const { isUserLoggedIn, user } = userInfo;

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			console.log('dados do usuário:', user);
			setUserInfo({
				isUserLoggedIn: !!user,
				user
			})
		})
	}, []);

	const logout = () => {
		firebase.auth().signOut().then(() => {
			console.log('deslogou!');
			setUserInfo({
				isUserLoggedIn: false,
				user: null
			})
		})
	};


	return(
		<div>
			{isUserLoggedIn && (
				<div>
					{user.displayName}
					<button onClick={logout}>Sair</button>
				</div>
			)}

			{!isUserLoggedIn && (
				<button onClick={login}>Login</button>
			)}

		</div>
	)
}

export default Login;