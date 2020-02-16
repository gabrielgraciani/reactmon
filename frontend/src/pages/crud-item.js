import React from 'react';
import Form from 'components/crud/item/formulario';
import Tabela from 'components/crud/item/tabela';
import {useSelector} from "react-redux";

function Crud_Item(){

	const {usuario} = useSelector(store => store.auth);
	const nome = usuario.displayName;

	return(
		<>

		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
					<h1>Olá {nome}</h1>
				</div>

				<Tabela />

			</div>
		</div>

		<Form />

		</>


	)
}

export default Crud_Item;