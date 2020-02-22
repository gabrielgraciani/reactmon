import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {pokemonSend, pokemonUpdate, pokemonCloseForm} from "../../../redux/actions/pokemon";
import CircularProgress from '@material-ui/core/CircularProgress';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	return (
		<input type={type} name={name} checked={checked} onChange={onChange} />
	);
};

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
	const [checkedItems, setCheckedItems] = useState([]);
	const [checkedItemsFraq, setCheckedItemsFraq] = useState([]);

	const dispatch = useDispatch();
	const {active, payload, isEditing, saving } = useSelector(store => store.pokemon);

	useEffect(() => {
		if(payload){
			setValues(payload);
			setCheckedItems(payload.tipo);
			setCheckedItemsFraq(payload.fraquezas);
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

	const handleChangeCheckBox = event => {
		if(checkedItems.includes(event.target.name)){
			setCheckedItems([
				...checkedItems.filter(item => item !== event.target.name)
			]);
		}else{
			setCheckedItems([
				...checkedItems,
				event.target.name
			]);
		}
	};
	const handleChangeCheckBoxFraq = event => {
		if(checkedItemsFraq.includes(event.target.name)){
			setCheckedItemsFraq([
				...checkedItemsFraq.filter(item => item !== event.target.name)
			]);
		}else{
			setCheckedItemsFraq([
				...checkedItemsFraq,
				event.target.name
			]);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const {nome, altura, peso, imagem} = values;
		let tipo = values.tipo;
		tipo = checkedItems;
		let fraquezas = values.fraquezas;
		fraquezas = checkedItemsFraq;

		if(!nome || !altura || !peso || !imagem){ setValidate(true); }
		else{ dispatch(pokemonSend({nome, tipo, altura, peso, fraquezas, imagem})); setValidate(false);}

	};

	const onUpdate = (e) => {
		e.preventDefault();

		const {id, nome, altura, peso, imagem} = values;
		let tipo = values.tipo;
		tipo = checkedItems;
		let fraquezas = values.fraquezas;
		fraquezas = checkedItemsFraq;

		if(!nome || !altura || !peso || !imagem){ setValidate(true); }
		else{ dispatch(pokemonUpdate({id, nome, tipo, altura, peso, fraquezas, imagem})); setValidate(false);}
	};

	const tipos = [{name: "grass",	key: "1", label: "Grass", value: 'Grass'},
		{name: "poison", key: "2", label: "Poison", value: 'Poison'},
		{name: "fire", key: "3", label: "Fire", value: "Fire"},
		{name: "flying", key: "4", label: "Flying", value: "Flying"},
		{name: "water", key: "5", label: "Water", value: "Water"},
		{name: "bug", key: "6", label: "Bug", value: "Bug"},
		{name: "normal", key: "7", label: "Normal", value: "Normal"},
		{name: "electric", key: "8", label: "Electric", value: "Electric"},
		{name: "ground", key: "9", label: "Ground", value: "Ground"},
		{name: "fighting", key: "10", label: "Fighting", value: "Fighting"},
		{name: "psychic", key: "11", label: "Psychic", value: "Psychic"},
		{name: "rock", key: "12", label: "Rock", value: "Rock"},
		{name: "ice", key: "13", label: "Ice", value: "Ice"},
		{name: "Ghost", key: "14", label: "Ghost", value: "Ghost"},
		{name: "dragon", key: "15", label: "Dragon", value: "Dragon"},
		{name: "fairy", key: "16", label: "Fairy", value: "Fairy"}];

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
				<div className="item">
					<label htmlFor="tipo">Tipo</label>
					<div className="checkboxes">
						{tipos.map(item => (
							<label className="container" key={item.key}>{item.label}
								<Checkbox name={item.name}
										  checked={checkedItems.includes(item.name)}
										  onChange={handleChangeCheckBox} />
								<span className="checkmark"> </span>
							</label>
						))}
					</div>
				</div>
				<div className="item">
					<label htmlFor="fraquezas">Fraquezas</label>
					<div className="checkboxes">
						{tipos.map(item => (
							<label className="container" key={item.key}>{item.label}
								<Checkbox name={item.name}
										  checked={checkedItemsFraq.includes(item.name)}
										  onChange={handleChangeCheckBoxFraq} />
								<span className="checkmark"> </span>
							</label>
						))}
					</div>
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
