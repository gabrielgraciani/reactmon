import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activeClass, desactiveClass} from "../../../redux/actions/activeClass";

function Tabela() {
	const dispatch = useDispatch();

	const {active} = useSelector(store => store.activeClass);

	return(
		<div id="wrap_tabela" className={active}>
			<div className="head">
				<div className="titulo">
					<h3 onClick={() => dispatch(activeClass())}>Itens</h3>
				</div>

				<div className="botoes">
					<button onClick={() => dispatch(desactiveClass())}>Criar Item</button>
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