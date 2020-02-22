import React from 'react';
import Form from 'components/crud/item/formulario';
import Tabela from 'components/crud/item/tabela';
import NomeUser from 'components/crud/commons/nomeUser';

function CrudItem(){

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

export default CrudItem;