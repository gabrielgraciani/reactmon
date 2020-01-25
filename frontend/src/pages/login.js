import React, {useContext} from 'react';
import PokemonList from '../components/login/pokemonList';
import {AuthContext} from '../contexts/auth';

function Login () {
	const {login} = useContext(AuthContext);

	return(
		<div>
			<button onClick={login}>Login</button>


			<PokemonList />


		</div>
	)
}

export default Login;