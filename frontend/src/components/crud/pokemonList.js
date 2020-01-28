import React, {useContext} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {PokemonContext} from 'contexts/pokemon';

import map from 'lodash/map';

function PokemonList(){
	const {pokemonDB, deletePokemon, showEditPokemon} = useContext(PokemonContext);

	console.log(pokemonDB);
	return(
		<>
			<tbody>
			{pokemonDB.map((item) => (
				<tr className="row" key={item.id}>
					<td className="item">{item.id}</td>
					<td className="item">{item.nome}</td>
					<td className="item">{item.imagem}</td>
					<td className="item">{map(item.tipo, (v, k) => (
						<React.Fragment key={k}>{v}{k}, </React.Fragment>
						))}</td>
					<td className="item">{item.altura}</td>
					<td className="item">{item.peso}</td>
					<td className="item">{map(item.fraquezas, (v, k) => (
						<React.Fragment key={k}>{v}{k}, </React.Fragment>
					))}</td>
					<td className="item">evoluções</td>
					<td className="item actions">
						<div className="icon"><EditIcon className="edit" onClick={() => showEditPokemon(item.id)} /></div>
						<div className="icon"><DeleteIcon className="delete" onClick={() => { if (window.confirm(`Você quer mesmo deletar o pokemon ${item.nome} ?`)) deletePokemon(item.id)}} /></div>
					</td>
				</tr>
			))}
			</tbody>

		</>
	)
}

export default PokemonList;