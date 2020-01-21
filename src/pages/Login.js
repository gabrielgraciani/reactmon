import React, {Component} from 'react';
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

class Login extends Component {
	state = {
		isUserLoggedIn: false,
		user: null
	}

	componentDidMount () {
		firebase.auth().onAuthStateChanged((user) => {
			console.log('dados do usuário:', user)
			this.setState({
				isUserLoggedIn: !!user,
				user
			})
		})
	}

	login () {
		const provider = new firebase.auth.GithubAuthProvider()
		firebase.auth().signInWithRedirect(provider)
	}

	logout = () => {
		firebase.auth().signOut().then(() => {
			console.log('deslogou!')
			this.setState({
				isUserLoggedIn: false,
				user: null
			})
		})
	}

	render(){
		const {isUserLoggedIn, user} = this.state;
		return(
			<div>
				{isUserLoggedIn && (
					<div>
						{user.displayName}
						<button onClick={this.logout}>Sair</button>
					</div>
				)}

				{!isUserLoggedIn && (
					<button onClick={this.login}>Login</button>
				)}

			</div>
		)
	}

}

export default Login;