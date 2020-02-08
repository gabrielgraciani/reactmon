import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {desactiveClass} from "../../../redux/actions/activeClass";

function Formulario() {
	const dispatch = useDispatch();

	const {active} = useSelector(store => store.activeClass);

	return(
		<form id="wrap_formulario" className={active}>
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
					<input type="text" name="nome" autoComplete="off" />
				</div>

				<button className="salvar" type="button">Salvar</button>
			</div>

		</form>
	)
}

export default Formulario;