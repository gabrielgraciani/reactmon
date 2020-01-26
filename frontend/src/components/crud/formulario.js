import React, {useState} from 'react';
import {db} from 'services/firebase';
import CloseIcon from '@material-ui/icons/Close';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	console.log("Checkbox: ", name, checked);

	return (
		<input type={type} name={name} checked={checked} onChange={onChange} />
	);
};

function Formulario({change, activeClass}) {
	//teste formulario
	//USAR O USECALLBACK
	const [values, setValues] = useState({
		nome: '',
		imagem: '',
		tipo:[],
		altura: '',
		peso: '',
		fraquezas: [],
		evolucoes: []
	});

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
		console.log("checkedItems: ", checkedItems);
	};
	const handleChangeBoxFraq = event => {
		setCheckedItemsFraq({
			...checkedItemsFraq,
			[event.target.name]: event.target.checked
		});
		console.log("checkedItemsFraq: ", checkedItemsFraq);
	};

	const tipos = [
		{
			name: "fogo",
			key: "1",
			label: "Fogo",
			value: 'Fogo'
		},
		{
			name: "agua",
			key: "2",
			label: "Água",
			value: 'Água'
		}
	];

	const fraquezas = [
		{
			name: "fogo",
			key: "1",
			label: "Fogo",
			value: 'Fogo'
		},
		{
			name: "agua",
			key: "2",
			label: "Água",
			value: 'Água'
		}
	];

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

				<button onClick={handleSubmit} className="salvar">Salvar</button>
			</div>

		</form>
	)
}

export default Formulario;