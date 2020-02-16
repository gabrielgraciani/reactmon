import React, {useContext} from 'react';
import LoginForm from 'components/auth';
import CadastroForm from 'components/auth/cadastro';

function Login () {

	return(
		<>
		<LoginForm />
		<CadastroForm />
		</>
	)
}

export default Login;


