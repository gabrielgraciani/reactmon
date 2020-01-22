import React, {useState, useEffect} from 'react';
import firebase, {db} from '../services/firebase';
import Formulario from '../components/login/formulario';
import PokemonList from '../components/login/pokemonList';


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


			<PokemonList />


			<Formulario />
		</div>
	)
}

export default Login;