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


	//teste formulario
	const [values, setValues] = useState({
		nome: '',
		imagem: '',
		tipo:{
			nome_tipo: ""
		},
		altura: '',
		peso: '',
		fraquezas: {
			nome_fraqueza: ""
		},
		evolucoes: {
			prox_evol: ''
		}
	});
	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
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


			<div>
				pokemon teste

				{pokemonDB.map((item) => (
					<div key={item.id}>
						{item.name}
					</div>
				))}
			</div>

			<div id="wrap_formulario">
				<div className="indent">
					<form>
						<div className="item">
							<input type="text" name="nome" value={values.nome} onChange={handleChange} placeholder="Nome" />
						</div>
						<div className="item">
							<input type="text" name="imagem" value={values.imagem} onChange={handleChange} placeholder="Imagem" />
						</div>
						<div className="item">
							<input type="text" name="tipo" value={values.tipo} onChange={handleChange} placeholder="Tipo" />
						</div>
						<div className="item">
							<input type="text" name="altura" value={values.altura} onChange={handleChange} placeholder="Altura" />
						</div>
						<div className="item">
							<input type="text" name="peso" value={values.peso} onChange={handleChange} placeholder="Peso" />
						</div>
						<div className="item">
							<input type="text" name="fraquezas" value={values.fraquezas} onChange={handleChange} placeholder="Fraquezas" />
						</div>
						<div className="item">
							<input type="text" name="evolucoes" value={values.evolucoes} onChange={handleChange} placeholder="Próximas evoluções" />
						</div>

						<button onClick={handleSubmit}>Salvar</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;