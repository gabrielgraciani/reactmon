import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {itemSend, itemCloseForm} from "redux/actions/item";

function Formulario() {
	const initialState = {
		nome: '',
		descricao: ''
	};
	const [values, setValues] = useState(initialState);
	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const dispatch = useDispatch();
	const {active, payload, isEditing } = useSelector(store => store.item);
	console.log('chegou aqui', payload);

	useEffect(() => {
		if(payload){
			setValues(payload);
		}
	}, [payload]);

	const onSubmit = (e) => {
		e.preventDefault();
		const {nome, descricao} = e.target;
		console.log(nome.value, descricao.value);

		dispatch(itemSend({nome: nome.value, descricao: descricao.value}))
	};

	return(
		<form id="wrap_formulario" className={active} onSubmit={onSubmit}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Criar Item</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(itemCloseForm())} />
					</div>
				</div>

				<div className="item">
					<label htmlFor="nome">Nome</label>
					<input type="text" name="nome" value={values.nome} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="descricao">Descrição</label>
					<input type="text" name="descricao" value={values.descricao} onChange={handleChange} autoComplete="off" />
				</div>

				{isEditing ? <input type="submit" value="Editar" /> : <input type="submit" value="Salvar" />}

			</div>

		</form>
	)
}

export default Formulario;