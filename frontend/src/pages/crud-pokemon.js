import React, {useContext, useState, useEffect} from 'react';
import Form from 'components/crud/pokemon/formulario';
import Tabela from 'components/crud/pokemon/tabela';
import {PokemonContext} from 'contexts/pokemon';
import firebase from 'services/firebase';

function Crud_Pokemon() {

	const {changeClass, activeClass} = useContext(PokemonContext);



	return(
		<>
		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
				</div>

				<Tabela changeClass={changeClass} />

			</div>
		</div>

		<Form activeClass={activeClass} changeClass={changeClass} />
		</>
	)
}

export default Crud_Pokemon;