import React from 'react';
import PokemonList from 'components/crud/pokemonList';


function Tabela({change}) {

	return(
		<div id="wrap_tabela">
			<div className="head">
				<div className="titulo">
					<h3>Pokemons</h3>
				</div>

				<div className="botoes">
					<button onClick={change}>Criar Pokemon</button>
				</div>
			</div>

			<div className="conteudo">
				<div className="row thead">
					<div className="item">ID</div>
					<div className="item">Nome</div>
					<div className="item">Imagem</div>
					<div className="item">Tipo</div>
					<div className="item">Altura</div>
					<div className="item">Peso</div>
					<div className="item">Fraquezas</div>
					<div className="item">Evoluções</div>
					<div className="item">Ações</div>
				</div>

				<PokemonList />
			</div>
		</div>
	)
}

export default Tabela;