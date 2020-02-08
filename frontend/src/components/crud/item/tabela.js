import React from 'react';
import {useDispatch} from "react-redux";
import {activeClass} from "../../../redux/actions/activeClass";

function Tabela() {
	const dispatch = useDispatch();

	return(
		<div id="wrap_tabela">
			<div className="head">
				<div className="titulo">
					<h3>Itens</h3>
				</div>

				<div className="botoes">
					<button onClick={() => dispatch(activeClass())}>Criar Item</button>
				</div>
			</div>

			<table className="conteudo">
				<thead>
				<tr className="row head">
					<th className="item">ID</th>
					<th className="item">Nome</th>
					<th className="item">Descrição</th>
				</tr>
				</thead>

			</table>
		</div>
	)
}

export default Tabela;