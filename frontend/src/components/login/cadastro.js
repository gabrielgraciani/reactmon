import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {loginCloseForm} from "../../redux/actions/login";

function Cadastro(){
	const initialState = {
		nome: '',
		email: '',
		senha: ''
	};
	const [values, setValues] = useState(initialState);

	const dispatch = useDispatch();
	const {active} = useSelector(store => store.login);


	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('enviando...', values);
	};
	return(
		<div id="wrap_formulario" className={`${active} cadastro`}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Registro de usuário</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(loginCloseForm())} />
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
	)
};

export default Cadastro;