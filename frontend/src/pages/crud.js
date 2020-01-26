import React, {useContext, useState} from 'react';
import {AuthContext} from 'contexts/auth';
import Form from 'components/crud/formulario';
import Tabela from 'components/crud/tabela';
function Crud() {

	const {userInfo} = useContext(AuthContext);
	const nomeUser = userInfo.user.displayName;

	const [activeClass, setActiveClass] = useState('');

	const change = () => {
		setActiveClass(activeClass === '' ? 'active' : '');
	};

	return(
		<>
		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
					<h1>Olá {nomeUser}</h1>
				</div>

				<Tabela change={change} />

			</div>
		</div>

		<Form activeClass={activeClass} change={change} />
		</>
	)
}

export default Crud;