import React, {useState} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import CircularProgress from '@material-ui/core/CircularProgress';
import {authOpenForm, authSendLogin} from '../../redux/actions/auth';
import {useDispatch, useSelector} from "react-redux";

function LoginForm () {
	const initialState = {
		email: '',
		senha: ''
	};
	const [values, setValues] = useState(initialState);

	const dispatch = useDispatch();
	const {loading} = useSelector(store => store.auth);

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		const {email, senha} = values;


		dispatch(authSendLogin({email, senha}));

	};

	return(
		<div id="wrap_login">
			<div className="indent">
				<div className="titulo">
					<h1>Login</h1>
				</div>
				<form action="">
					<div className="item">
						<EmailIcon />
						<input type="text" placeholder="E-mail" name="email" value={values.email} onChange={handleChange} autoComplete="off" />
					</div>

					<div className="item">
						<LockIcon />
						<input type="password" placeholder="Senha" name="senha" value={values.senha} onChange={handleChange} autoComplete="off" />
					</div>

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