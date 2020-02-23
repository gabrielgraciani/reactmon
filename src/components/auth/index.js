import React, {useState} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import CircularProgress from '@material-ui/core/CircularProgress';
import GitHubIcon from '@material-ui/icons/GitHub';
import {authOpenForm, authSendLogin, authLoginGithub} from '../../redux/actions/auth';
import {useDispatch, useSelector} from "react-redux";

function LoginForm () {
	const initialState = {
		email: '',
		senha: ''
	};
	const [values, setValues] = useState(initialState);

	const dispatch = useDispatch();
	const {loading, mensagem} = useSelector(store => store.auth);

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const {email, senha} = values;

		dispatch(authSendLogin({email, senha}));

	};

	return(
		<div id="wrap_login">
			<div className="indent">
				<div className="titulo">
					<h1>Login</h1>
				</div>
				<div className="sociais">
					<button className="github" onClick={() => dispatch(authLoginGithub())}><GitHubIcon /></button>
				</div>
				<form action="">
					<div className="item">
						<EmailIcon />
						<input className={mensagem === 1 || mensagem === 3 ? 'erro' : ''} type="email" placeholder="E-mail" name="email" value={values.email} onChange={handleChange} autoComplete="off" />
					</div>

					<div className="item">
						<LockIcon />
						<input className={mensagem === 2 || mensagem === 3 ? 'erro' : ''} type="password" placeholder="Senha" name="senha" value={values.senha} onChange={handleChange} autoComplete="off" />
					</div>

					{mensagem === 3 && (
						<span>Inúmeras tentativas com falhas, tente novamente mais tarde</span>
					)}

					{loading ? <div className="load"><CircularProgress size={25} /></div> : <input type="submit" value="LOGIN" onClick={handleSubmit} />}
				</form>

				<div className="criar">
					<span>Não possui uma conta? <button type="button" onClick={() => dispatch(authOpenForm())}>Crie agora.</button></span>
				</div>
			</div>
		</div>
	)
}

export default LoginForm