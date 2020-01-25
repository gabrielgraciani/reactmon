import React, {useState, useContext} from 'react';
import {db} from '../services/firebase';
import {AuthContext} from '../contexts/auth';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	console.log("Checkbox: ", name, checked);

	return (
		<input type={type} name={name} checked={checked} onChange={onChange} />
	);
};

function Crud() {

	const {userInfo} = useContext(AuthContext);
	const nomeUser = userInfo.user.displayName;

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
		<>
		<div id="wrap_formulario">
			<div className="indent">
				<div className="titulo">
					<h1>Olá {nomeUser}</h1>
				</div>

				<div id="wrap_tabela">
					<div className="head">
						<div className="titulo">
							<h3>Pokemons</h3>
						</div>

						<div className="botoes">
							<button>Criar Pokemon</button>
						</div>
					</div>

					<div className="conteudo">
						<div className="row thead">
							<div className="item">ID</div>
							<div className="item">Nome</div>
							<div className="item">Imagem</div>
							<div className="item">Tipo</div>
							<div className="item">Altura</div>
							<div className="item">Peso</div>
							<div className="item">Fraquezas</div>
							<div className="item">Evoluções</div>
							<div className="item">Ações</div>
						</div>

						<div className="row">
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TTE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item actions">
								<div className="icon"><EditIcon /></div>
								<div className="icon"><DeleteIcon /></div>
							</div>
						</div>
						<div className="row">
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TTE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item actions">
								<div className="icon"><EditIcon /></div>
								<div className="icon"><DeleteIcon /></div>
							</div>
						</div>
						<div className="row">
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TTE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item">TETE</div>
							<div className="item actions">
								<div className="icon"><EditIcon /></div>
								<div className="icon"><DeleteIcon /></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<form>
			<div className="head">
				<div className="titulo">
					<h3>Pokemons</h3>
				</div>

				<div className="acoes">
					<button>Criar Pokemon</button>
				</div>
			</div>

			<div className="conteudo">
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
		</>
	)
}

export default Crud;