import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {itemSend, itemUpdate, itemCloseForm} from "redux/actions/item";

function Formulario() {
	const initialState = {
		nome: '',
		descricao: ''
	};
	const [values, setValues] = useState(initialState);
	const [changeFile, setChangeFile] = useState('');
	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});
	const handleChangeFile = (e) => {
		setChangeFile(e.target.files[0]);
	};

	const dispatch = useDispatch();
	const {active, payload, isEditing } = useSelector(store => store.item);

	useEffect(() => {
		if(payload){
			setValues(payload);
		}
	}, [payload]);

	const onSubmit = (e) => {
		e.preventDefault();

		const {nome, descricao} = values;
		dispatch(itemSend({nome, descricao, changeFile}));
	};

	const onUpdate = (e) => {
		e.preventDefault();

		const {id, nome, descricao} = values;
		dispatch(itemUpdate({id, nome, descricao}));
	};

	return(
		<form id="wrap_formulario" className={active}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>{isEditing ? 'Editar' : 'Criar'} Item</h3>
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
				<div className="item">
					<label htmlFor="imagem">Imagem</label>
					<input type="file" accept="image/*" onChange={handleChangeFile} />
				</div>

				{isEditing ? <input type="submit" value="Editar" onClick={onUpdate} /> : <input type="submit" value="Salvar" onClick={onSubmit} />}

			</div>

		</form>
	)
}

export default Formulario;
