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
		fraquezas: {
			nome_fraqueza: ""
		},
		evolucoes: {
			prox_evol: ''
		}
	});

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const  handleSubmit = async (e) => {
		e.preventDefault();
		values.tipo = checkedItems;
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

	const handleChangeBox = event => {
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked
		});
		console.log("checkedItems: ", checkedItems);
	};

	const checkboxes = [
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
					<input type="text" name="nome" value={values.nome} onChange={handleChange} placeholder="Nome"/>
				</div>
				<div className="item">
					<input type="text" name="imagem" value={values.imagem} onChange={handleChange}
						   placeholder="Imagem"/>
				</div>
				<div className="item">
					tipo pokemon:
					{checkboxes.map(item => (
						<label key={item.key}>
							{item.name}
							<Checkbox
								name={item.name}
								checked={checkedItems[item.name]}
								onChange={handleChangeBox}
							/>
						</label>
					))}
				</div>
				<div className="item">
					<input type="text" name="altura" value={values.altura} onChange={handleChange}
						   placeholder="Altura"/>
				</div>
				<div className="item">
					<input type="text" name="peso" value={values.peso} onChange={handleChange} placeholder="Peso"/>
				</div>
				<div className="item">
					<input type="text" name="fraquezas" value={values.fraquezas} onChange={handleChange}
						   placeholder="Fraquezas"/>
				</div>
				<div className="item">
					<input type="text" name="evolucoes" value={values.evolucoes} onChange={handleChange}
						   placeholder="Próximas evoluções"/>
				</div>

				<button onClick={handleSubmit}>Salvar</button>
			</div>

		</form>
	)
}

export default Formulario;