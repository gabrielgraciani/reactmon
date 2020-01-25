import React, {useState, useEffect} from 'react';
import {db} from 'services/firebase';

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