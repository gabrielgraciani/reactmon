import React, {useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

function Login () {
	const {login} = useContext(AuthContext);

	return(
		<>
		<button className="git" onClick={login}>Login com github</button>
		<div id="wrap_login">
			<div className="indent">
				<div className="titulo">
					<h1>Login</h1>
				</div>
				<form action="">
					<div className="item">
						<EmailIcon />
						<input type="text" placeholder="E-mail" />
					</div>

					<div className="item">
						<LockIcon />
						<input type="password" placeholder="Senha"/>
					</div>

					<input type="submit" value="LOGIN" />
				</form>

				<div className="criar">
					<span>Não possui uma conta? <button>Crie agora.</button></span>
				</div>
			</div>
		</div>
		</>
	)
}

export default Login;