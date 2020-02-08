import React from 'react';
import Form from 'components/crud/item/formulario';
import Tabela from 'components/crud/item/tabela';


function Crud_Item(){
	return(
		<>

		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
					<h1>Olá teste</h1>
				</div>

				<Tabela />

			</div>
		</div>

		<Form />
		</>


	)
}

export default Crud_Item;