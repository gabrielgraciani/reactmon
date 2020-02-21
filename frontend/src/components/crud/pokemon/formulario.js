import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {pokemonSend, pokemonUpdate, pokemonCloseForm} from "../../../redux/actions/pokemon";
import CircularProgress from '@material-ui/core/CircularProgress';

function Formulario() {
	const initialState = {
		id: '',
		nome: '',
		tipo: [],
		altura: '',
		peso: '',
		fraquezas: [],
		evolucoes: '',
		imagem: ''
	};
	const [values, setValues] = useState(initialState);
	const [validate, setValidate] = useState(false);

	const dispatch = useDispatch();
	const {active, payload, isEditing, saving } = useSelector(store => store.pokemon);

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
			altura: values.altura,
			peso: values.peso,
			imagem: e.target.files[0]
		})
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const {nome, altura, peso, imagem} = values;
		if(!nome || !altura || !peso || !imagem){ setValidate(true); }
		else{ dispatch(pokemonSend({nome, altura, peso, imagem})); setValidate(false);}

	};

	const onUpdate = (e) => {
		e.preventDefault();

		const {id, nome, altura, peso, imagem} = values;
		if(!nome || !altura || !peso || !imagem){ setValidate(true); }
		else{ dispatch(pokemonUpdate({id, nome, altura, peso, imagem})); setValidate(false);}
	};

	return(
		<form id="wrap_formulario" className={active}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>{isEditing ? 'Editar' : 'Criar'} Item</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(pokemonCloseForm())} />
					</div>
				</div>

				<div className="item">
					<label htmlFor="nome">Nome<span>{validate && '*'}</span></label>
					<input type="text" name="nome" value={values.nome} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="altura">Altura<span>{validate && '*'}</span></label>
					<input type="text" name="altura" value={values.altura} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="peso">Peso<span>{validate && '*'}</span></label>
					<input type="text" name="peso" value={values.peso} onChange={handleChange} autoComplete="off" />
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
