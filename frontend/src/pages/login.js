import React, {useContext} from 'react';
import Formulario from '../components/login/formulario';
import PokemonList from '../components/login/pokemonList';
import {AuthContext} from '../contexts/auth';

function Login () {
	const {login} = useContext(AuthContext);



	return(
		<div>
			<button onClick={login}>Login</button>


			<PokemonList />


			<Formulario />
		</div>
	)
}

export default Login;