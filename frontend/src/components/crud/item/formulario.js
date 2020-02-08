import React from 'react';
import CloseIcon from '@material-ui/icons/Close';


function Formulario() {
	return(
		<form id="wrap_formulario">
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Criar Pokemon</h3>
					</div>
					<div className="fechar">
						<CloseIcon />
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