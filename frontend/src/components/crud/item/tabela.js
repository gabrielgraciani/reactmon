import React from 'react';
import DataList from './dataList';
import {itemOpenForm} from "../../../redux/actions/item";
import {useDispatch} from "react-redux";

function Tabela() {
	const dispatch = useDispatch();

	return(
		<div id="wrap_tabela">
			<div className="head">
				<div className="titulo">
					<h3>Itens</h3>
				</div>

				<div className="botoes">
					<button onClick={() => dispatch(itemOpenForm())}>Criar Item</button>
				</div>
			</div>

			<div className="conteudo">
				<div className="row head">
					<div className="item">ID</div>
					<div className="item">Nome</div>
					<div className="item">Imagem</div>
					<div className="item">Descrição</div>
					<div className="item">Ações</div>
				</div>

				<DataList />
			</div>
		</div>
	)
}

export default Tabela;