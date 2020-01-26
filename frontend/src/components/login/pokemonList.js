import React, {useState, useEffect} from 'react';
import {db} from 'services/firebase';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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

	console.log(pokemonDB);

	return(
		<>
			{pokemonDB.map((item) => (
				<div className="row" key={item.id}>
					<div className="item">{item.id}</div>
					<div className="item">{item.nome}</div>
					<div className="item">{item.imagem}</div>
					<div className="item">tipos</div>
					<div className="item">{item.altura}</div>
					<div className="item">{item.peso}</div>
					<div className="item">fraquezas</div>
					<div className="item">evoluções</div>
					<div className="item actions">
						<div className="icon"><EditIcon className="edit" /></div>
						<div className="icon"><DeleteIcon className="delete" /></div>
					</div>
				</div>
			))}
		</>
	)
}

export default PokemonList;