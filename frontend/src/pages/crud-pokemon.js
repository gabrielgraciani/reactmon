import React, {useContext, useState, useEffect} from 'react';
import Form from 'components/crud/pokemon/formulario';
import Tabela from 'components/crud/pokemon/tabela';
import {PokemonContext} from 'contexts/pokemon';
import firebase from 'services/firebase';

function Crud_Pokemon() {

	const {changeClass, activeClass} = useContext(PokemonContext);

	const [userInfo, setUserInfo] = useState({
		isUserLoggedIn: false,
		user: []
	});
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUserInfo({
				isUserLoggedIn: !!user,
				user
			});
			console.log('user', user);
		});
	}, [setUserInfo]);

	console.log(userInfo.user);
	const nomeUser = userInfo.user.displayName || '';

	return(
		<>
		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
					<h1>Olá {nomeUser}</h1>
				</div>

				<Tabela changeClass={changeClass} />

			</div>
		</div>

		<Form activeClass={activeClass} changeClass={changeClass} />
		</>
	)
}

export default Crud_Pokemon;