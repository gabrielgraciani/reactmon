import React, {useState, useEffect} from 'react';
import firebase, {db} from '../services/firebase';


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


	const [pokemonDB, setPokemonDB] = useState([]);
	//pegar os dados de uma tabela no firestore
	useEffect(() => {
		let pokemon = [];
		db.collection('pokemon').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				pokemon.push({
					id: doc.id,
					...doc.data()
				})
			});
			setPokemonDB(pokemon);
		});
	}, []);

	async function send(){
		try{
			await db.collection('pokemon').add({
				id: Math.random(),
				name: 'gabriel',
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			})
		} catch(e){
			console.log('erro ao salvar pokemon: ', e);
		}
	}
	/*send();*/



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


			<div>
				pokemon teste

				{pokemonDB.map((item) => (
					<div key={item.id}>
						{item.name}
					</div>
				))}
			</div>
		</div>
	)
}

export default Login;