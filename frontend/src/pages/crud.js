import React, {useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import Form from 'components/crud/formulario';
import Tabela from 'components/crud/tabela';
function Crud() {

	const {userInfo} = useContext(AuthContext);
	const nomeUser = userInfo.user.displayName;

	return(
		<>
		<div id="wrap_formulario">
			<div className="indent">
				<div className="titulo">
					<h1>Olá {nomeUser}</h1>
				</div>

				<Tabela />

			</div>
		</div>

		<Form />
		</>
	)
}

export default Crud;