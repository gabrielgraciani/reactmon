import React from 'react';
import PokemonList from 'components/crud/pokemon/pokemonList';

function Tabela({changeClass}) {

	return(
		<div id="wrap_tabela">
			<div className="head">
				<div className="titulo">
					<h3>Pokemons</h3>
				</div>

				<div className="botoes">
					<button onClick={changeClass}>Criar Pokemon</button>
				</div>
			</div>

			<table className="conteudo">
				<thead>
					<tr className="row head">
						<th className="item">ID</th>
						<th className="item">Nome</th>
						<th className="item">Imagem</th>
						<th className="item">Tipo</th>
						<th className="item">Altura</th>
						<th className="item">Peso</th>
						<th className="item">Fraquezas</th>
						<th className="item">Evoluções</th>
						<th className="item">Ações</th>
					</tr>
				</thead>

				<PokemonList />
			</table>
		</div>
	)
}

export default Tabela;