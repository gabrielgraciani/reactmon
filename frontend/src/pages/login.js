import React, {useState, useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import CloseIcon from '@material-ui/icons/Close';

function Login () {
	const initialState = {
		nome: '',
		email: '',
		senha: ''
	};
	const {login} = useContext(AuthContext);
	const [active, setActive] = useState('');
	const [values, setValues] = useState(initialState);

	const handleChangeForm = (e) => {
		e.preventDefault();
		setActive(active === '' ? 'active' : '');
	};

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('enviando...', values);
	};

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
					<span>Não possui uma conta? <button type="button" onClick={handleChangeForm}>Crie agora.</button></span>
				</div>
			</div>
		</div>

		<div id="wrap_formulario" className={`${active} cadastro`}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Registro de usuário</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={handleChangeForm} />
					</div>
				</div>

				<div className="item">
					<input type="text" name="nome" onChange={handleChange} value={values.nome} autoComplete="off" placeholder="Nome Completo" />
				</div>
				<div className="item">
					<input type="text" name="email" onChange={handleChange} value={values.email} autoComplete="off" placeholder="E-mail" />
				</div>
				<div className="item">
					<input type="password" name="senha" onChange={handleChange} value={values.senha} autoComplete="off" placeholder="Senha" />
				</div>

				<input type="submit" value="Cadastrar" onClick={handleSubmit} />
			</div>
		</div>
		</>
	)
}

export default Login;