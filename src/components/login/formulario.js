import React, {useState, useEffect} from 'react';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	console.log("Checkbox: ", name, checked);

	return (
		<input type={type} name={name} checked={checked} onChange={onChange} />
	);
};

function Formulario() {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		values.tipo = checkedItems;
		console.log(values);
	};



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
			name: "check-box-1",
			key: "checkBox1",
			label: "Check Box 1",
			value: 'teste1'
		},
		{
			name: "check-box-2",
			key: "checkBox2",
			label: "Check Box 2",
			value: 'teste2'
		}
	];
	return(
		<div id="wrap_formulario">
			<div className="indent">
				<form>
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
				</form>
			</div>
		</div>
	)
}

export default Formulario;