import React from 'react';
import Form from 'components/crud/pokemon/formulario';
import Tabela from 'components/crud/pokemon/tabela';
import NomeUser from 'components/crud/commons/nomeUser';

function CrudPokemon(){

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

export default CrudPokemon;