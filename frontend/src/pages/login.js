import React, {useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import LoginForm from 'components/login';
import CadastroForm from 'components/login/cadastro';

function Login () {
	const {login} = useContext(AuthContext);

	return(
		<>
		<button className="git" onClick={login}>Login com github</button>

		<LoginForm />
		<CadastroForm />
		</>
	)
}

export default Login;


