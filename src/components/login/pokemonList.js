import React, {useState, useEffect} from 'react';
import firebase, {db} from '../../services/firebase';

function PokemonList(){

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
			pokemon teste

			{pokemonDB.map((item) => (
				<div key={item.id}>
					{item.name}
				</div>
			))}
		</div>
	)
}

export default PokemonList;