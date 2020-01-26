import React, {useContext} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {PokemonContext} from 'contexts/pokemon';

function PokemonList(){
	const {pokemonDB, deletePokemon} = useContext(PokemonContext);

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
						<div className="icon"><DeleteIcon className="delete" onClick={() => { if (window.confirm(`Você quer mesmo deletar o pokemon ${item.nome} ?`)) deletePokemon(item.id)}} /></div>
					</div>
				</div>
			))}
		</>
	)
}

export default PokemonList;