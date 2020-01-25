import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Tabela() {
	return(
		<div id="wrap_tabela">
			<div className="head">
				<div className="titulo">
					<h3>Pokemons</h3>
				</div>

				<div className="botoes">
					<button>Criar Pokemon</button>
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

				<div className="row">
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TTE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item actions">
						<div className="icon"><EditIcon /></div>
						<div className="icon"><DeleteIcon /></div>
					</div>
				</div>
				<div className="row">
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TTE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item actions">
						<div className="icon"><EditIcon /></div>
						<div className="icon"><DeleteIcon /></div>
					</div>
				</div>
				<div className="row">
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TTE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item">TETE</div>
					<div className="item actions">
						<div className="icon"><EditIcon /></div>
						<div className="icon"><DeleteIcon /></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tabela;