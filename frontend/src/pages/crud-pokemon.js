import React, {useContext} from 'react';
import Form from 'components/crud/pokemon/formulario';
import Tabela from 'components/crud/pokemon/tabela';
import {PokemonContext} from 'contexts/pokemon';

function Crud_Pokemon() {

	const {changeClass, activeClass} = useContext(PokemonContext);



	return(
		<>
		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
					<h1>Olá teste</h1>
				</div>

				<Tabela changeClass={changeClass} />

			</div>
		</div>

		<Form activeClass={activeClass} changeClass={changeClass} />
		</>
	)
}

export default Crud_Pokemon;