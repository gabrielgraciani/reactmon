import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import {authOpenForm} from '../../redux/actions/auth';
import {useDispatch} from "react-redux";

function LoginForm () {
	const dispatch = useDispatch();

	return(
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
					<span>Não possui uma conta? <button type="button" onClick={() => dispatch(authOpenForm())}>Crie agora.</button></span>
				</div>
			</div>
		</div>
	)
}

export default LoginForm