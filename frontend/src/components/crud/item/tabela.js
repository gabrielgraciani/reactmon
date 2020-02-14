import React from 'react';
import {useDispatch} from "react-redux";
import {itemOpenForm} from "redux/actions/item";
import DataList from './dataList';
import SearchIcon from '@material-ui/icons/Search';

function Tabela() {
	const dispatch = useDispatch();

	return(
		<div id="wrap_tabela">
			<div className="head">
				<div className="titulo">
					<h3>Itens</h3>
				</div>

				<div className="search">
					<input className="search-input" type="text" name="" placeholder="Pesquise um item" />
					<div className="search-btn">
						<SearchIcon />
					</div>
				</div>

				<div className="botoes">
					<button onClick={() => dispatch(itemOpenForm())}>Criar Item</button>
				</div>
			</div>

			<table className="conteudo">
				<thead>
				<tr className="row head">
					<th className="item">ID</th>
					<th className="item">Nome</th>
					<th className="item">Descrição</th>
					<th className="item">Ações</th>
				</tr>
				</thead>

				<DataList />
			</table>
		</div>
	)
}

export default Tabela;