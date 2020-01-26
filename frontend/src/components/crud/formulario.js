import React, {useState} from 'react';
import {db} from 'services/firebase';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux';
import {addPokemon} from 'redux/reducers/pokemons/action-creators';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	return (
		<input type={type} name={name} checked={checked} onChange={onChange} />
	);
};

function Formulario({change, activeClass, onSubmit}) {
	//teste formulario
	//USAR O USECALLBACK
	const initialState = {
		nome: '',
		imagem: '',
		tipo:[],
		altura: '',
		peso: '',
		fraquezas: [],
		evolucoes: []
	};
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const  handleSubmit = async (e) => {
		e.preventDefault();
		values.tipo = checkedItems;
		values.fraquezas = checkedItemsFraq;
		console.log(values);
		savePokemon();
		change();
		setValues(initialState);
		setCheckedItems({});
		setCheckedItemsFraq({});
	};

	async function savePokemon(){
		try{
			await db.collection('pokemon').add({
				id: Math.random(),
				nome: values.nome,
				imagem: values.imagem,
				altura: values.altura,
				evolucoes: values.evolucoes,
				fraquezas: values.fraquezas,
				peso: values.peso,
				tipo: values.tipo
			})
		} catch(e){
			console.log('erro ao salvar pokemon: ', e);
		}
	}


	const [checkedItems, setCheckedItems] = useState({});
	const [checkedItemsFraq, setCheckedItemsFraq] = useState({});

	const handleChangeBox = event => {
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked
		});
		//console.log("checkedItems: ", checkedItems);
	};
	const handleChangeBoxFraq = event => {
		setCheckedItemsFraq({
			...checkedItemsFraq,
			[event.target.name]: event.target.checked
		});
		//console.log("checkedItemsFraq: ", checkedItemsFraq);
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

	const fraquezas = [{name: "grass",	key: "1", label: "Grass", value: 'Grass'},
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
		<form id="wrap_formulario" className={`${activeClass}`}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>Criar Pokemon</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={change} />
					</div>
				</div>

				<div className="item">
					<label htmlFor="nome">Nome</label>
					<input type="text" name="nome" value={values.nome} onChange={handleChange} />
				</div>
				<div className="item">
					<label htmlFor="imagem">Imagem</label>
					<input type="text" name="imagem" value={values.imagem} onChange={handleChange} />
				</div>
				<div className="item">
					<label htmlFor="tipo">Tipo</label>
					<div className="checkboxes">
						{tipos.map(item => (
							<label className="container" key={item.key}>{item.label}
								<Checkbox name={item.name}
										  checked={checkedItems[item.name]}
										  onChange={handleChangeBox} />
								<span className="checkmark"> </span>
							</label>
						))}
					</div>
				</div>
				<div className="item">
					<label htmlFor="altura">Altura</label>
					<input type="text" name="altura" value={values.altura} onChange={handleChange} />
				</div>
				<div className="item">
					<label htmlFor="peso">Peso</label>
					<input type="text" name="peso" value={values.peso} onChange={handleChange} />
				</div>
				<div className="item">
					<label htmlFor="fraquezas">Fraquezas</label>
					<div className="checkboxes">
						{fraquezas.map(item => (
							<label className="container" key={item.key}>{item.label}
								<Checkbox name={item.name}
										  checked={checkedItemsFraq[item.name]}
										  onChange={handleChangeBoxFraq} />
								<span className="checkmark"> </span>
							</label>
						))}
					</div>

				</div>
				<div className="item">
					<input type="text" name="evolucoes" value={values.evolucoes} onChange={handleChange}
						   placeholder="Próximas evoluções"/>
				</div>

				<button onClick={onSubmit} className="salvar">Salvar</button>
			</div>

		</form>
	)
}

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (e) => {
		e.preventDefault();
		dispatch(addPokemon({
			nome: "eqwewq",
			tipo: "",
			altura: "",
			peso: "",
			fraquezas: "",
			evolucoes: ""
		}))
	}
});

export default connect(null, mapDispatchToProps)(Formulario);