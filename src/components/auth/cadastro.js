import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch, useSelector} from "react-redux";
import {authCloseForm, authSendCadastro} from "../../redux/actions/auth";

function Cadastro(){
	const initialState = {
		nome: '',
		email: '',
		senha: ''
	};
	const [values, setValues] = useState(initialState);
	const [validate, setValidate] = useState(false);

	const dispatch = useDispatch();
	const {active, payload, saving, success, mensagem} = useSelector(store => store.auth);

	useEffect(() => {
		if(payload){
			setValues(payload);
		}
	}, [payload]);

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const {nome, email, senha} = values;

		if(!nome || !email || !senha){
			setValidate(true);
		}else{
			setValidate(false);
			dispatch(authSendCadastro({nome, email, senha}));
		}

	};
	return(
		<div id="wrap_formulario" className={`${active} cadastro`}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Registro de usuário</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(authCloseForm())} />
					</div>
				</div>

				<div className="item">
					<input type="text" name="nome" onChange={handleChange} value={values.nome} autoComplete="off" placeholder="Nome Completo" />
					{validate && <div className="validate">Preencha o nome</div>}
				</div>
				<div className="item">
					<input type="email" name="email" onChange={handleChange} value={values.email} autoComplete="off" placeholder="E-mail" />
					{validate && <div className="validate">Preencha o e-mail</div>}
				</div>
				<div className="item">
					<input type="password" name="senha" onChange={handleChange} value={values.senha} autoComplete="off" placeholder="Senha" />
					{validate && <div className="validate">Preencha a senha</div>}
				</div>
				{mensagem === 1 && (
					<div className="validate">E-mail já cadastrado. Desista agora...</div>
				)}
				{mensagem === 2 && (
					<div className="validate">Digite um e-mail real, sem viajar na maionese...</div>
				)}
				{mensagem === 3 && (
					<div className="validate">A senha precisa ter pelo menos 6 caracteres, faz uma força...</div>
				)}

				{success ? <div className="load"><CheckIcon size={25} /></div> : saving ? <div className="load"><CircularProgress size={25} /></div> : <input type="submit" value="Cadastrar" onClick={handleSubmit} /> }
			</div>
		</div>
	)
};

export default Cadastro;