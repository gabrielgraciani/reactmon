import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {cidadeSend, cidadeUpdate, cidadeCloseForm} from "../../../redux/actions/cidade";
import CircularProgress from '@material-ui/core/CircularProgress';

function Formulario() {
	const initialState = {
		id: '',
		nome: '',
		descricao: '',
		imagem: ''
	};
	const [values, setValues] = useState(initialState);
	const [validate, setValidate] = useState(false);

	const dispatch = useDispatch();
	const {active, payload, isEditing, saving } = useSelector(store => store.cidade);

	useEffect(() => {
		if(payload){
			setValues(payload);
		}
	}, [payload]);

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});
	const handleChangeFile = (e) => {
		setValues({
			id: values.id,
			nome: values.nome,
			descricao: values.descricao,
			funcao: values.funcao,
			imagem: e.target.files[0]
		})
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const {nome, descricao, imagem} = values;
		if(!nome || !descricao || !imagem){ setValidate(true); }
		else{ dispatch(cidadeSend({nome, descricao, imagem})); setValidate(false);}

	};

	const onUpdate = (e) => {
		e.preventDefault();

		const {id, nome, descricao, imagem} = values;
		if(!nome || !descricao || !imagem){ setValidate(true); }
		else{ dispatch(cidadeUpdate({id, nome, descricao, imagem})); setValidate(false);}
	};

	return(
		<form id="wrap_formulario" className={active}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>{isEditing ? 'Editar' : 'Criar'} Item</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(cidadeCloseForm())} />
					</div>
				</div>

				<div className="item">
					<label htmlFor="nome">Nome<span>{validate && '*'}</span></label>
					<input type="text" name="nome" value={values.nome} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="descricao">Descrição<span>{validate && '*'}</span></label>
					<textarea type="text" name="descricao" value={values.descricao} onChange={handleChange} autoComplete="off" />
				</div>

				<div className="item file">
					<label className="upload">
						<input type="file" accept="image/*" multiple onChange={handleChangeFile} />
						Selecione um arquivo<span>{validate && '*'}</span>
					</label>

					{values.imagem.name &&
						<label htmlFor="">
							{values.imagem.name}
						</label>
					}
				</div>

				<div className="item"><label htmlFor=""><span>{validate && 'Preencha os campos com *'}</span></label></div>

				{saving ? <div className="load"><CircularProgress size={25} /> </div> : isEditing ? <input type="submit" value="Editar" onClick={onUpdate} /> : <input type="submit" value="Salvar" onClick={onSubmit} />}


			</div>

		</form>
	)
}

export default Formulario;
