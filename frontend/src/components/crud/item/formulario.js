import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {desactiveClass} from "redux/actions/activeClass";
import {itemSend} from "redux/actions/item";

function Formulario() {
	const dispatch = useDispatch();

	const {active} = useSelector(store => store.activeClass);

	const { payload } = useSelector(store => store.item);

	console.log('chegou aqui', payload);

	const onSubmit = (e) => {
		e.preventDefault();
		const {nome, descricao} = e.target;
		console.log(nome.value, descricao.value);

		dispatch(itemSend({nome: nome.value, descricao: descricao.value}))
	};

	return(
		<form id="wrap_formulario" className={active} onSubmit={onSubmit}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Criar Item</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(desactiveClass())} />
					</div>
				</div>

				<div className="item">
					<label htmlFor="nome">Nome</label>
					<input type="text" name="nome" value={(payload) ? payload.nome : ''} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="descricao">Descrição</label>
					<input type="text" name="descricao" autoComplete="off" />
				</div>

				<input type="submit" value="Salvar" />
			</div>

		</form>
	)
}

export default Formulario;