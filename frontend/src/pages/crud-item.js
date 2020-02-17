import React from 'react';
import Form from 'components/crud/item/formulario';
import Tabela from 'components/crud/item/tabela';
import NomeUser from 'components/crud/commons/nomeUser';

function Crud_Item(){

	return(
		<>

		<div id="wrap_crud">
			<div className="indent">
				<NomeUser />

				<Tabela />

			</div>
		</div>

		<Form />

		</>


	)
}

export default Crud_Item;