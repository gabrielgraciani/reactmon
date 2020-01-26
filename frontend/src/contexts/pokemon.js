import React, {createContext, useState, useEffect} from 'react';
import {db} from 'services/firebase';


export const PokemonContext = createContext();

function Pokemon({children}){

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
	const [checkedItems, setCheckedItems] = useState({});
	const [checkedItemsFraq, setCheckedItemsFraq] = useState({});
	const [pokemonDB, setPokemonDB] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [activeClass, setActiveClass] = useState('');
	const [refreshTable, setRefreshTable] = useState(0);

	//começo para o fomulario de cadastro
	const changeClass = () => {
		setActiveClass(activeClass === '' ? 'active' : '');
	};

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleChangeBox = event => {
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked
		});
	};
	const handleChangeBoxFraq = event => {
		setCheckedItemsFraq({
			...checkedItemsFraq,
			[event.target.name]: event.target.checked
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		values.tipo = checkedItems;
		values.fraquezas = checkedItemsFraq;
		console.log(values);
		savePokemon();
		changeClass();
		setValues(initialState);
		setCheckedItems({});
		setCheckedItemsFraq({});
		setRefreshTable(oldKey => oldKey + 1);
	};

	const savePokemon = async() =>{
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
			.then(function(docRef){
				db.collection('pokemon').doc(docRef.id).update({
					id: docRef.id
				});
			})
		} catch(e){
			console.log('erro ao salvar pokemon: ', e);
		}
	};

	const deletePokemon = async(id) =>{
		try{
			await db.collection('pokemon').doc(id).delete().then(() => {
				console.log("pokemon deletado com sucesso");
				setRefreshTable(oldKey => oldKey + 1);
			})
		}
		catch(e){
			console.log('erro', e);
		}
	};

	const showEditPokemon = (id) =>{
		setIsEditing(true);
		changeClass();
		console.log(id);

		db.collection("pokemon").where("id", "==", id).get().then(function(querySnapshot) {
			querySnapshot.forEach(function (doc) {
				console.log(doc.id, " => ", doc.data());
				const {id, nome, imagem, tipo, altura, peso, fraquezas, evolucoes} = doc.data();

				setValues({
					id: id,
					nome: nome,
					imagem: imagem,
					tipo: tipo,
					altura: altura,
					peso: peso,
					fraquezas: fraquezas,
					evolucoes: evolucoes
				})
			});
		});

	};

	const handleEdit = (id) => {
		console.log('vamos editar!!!', id);
	};

	//fim do formulario de cadastro


	const fetchData = () => {
		let pokemon = [];
		db.collection('pokemon').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				pokemon.push({
					id: doc.id,
					...doc.data()
				})
			});
			setPokemonDB(pokemon);
		});
	};


	useEffect(() => {
		fetchData();
	}, [refreshTable]);

	return(
		<PokemonContext.Provider value={{
			values,
			handleChange,
			handleSubmit,
			savePokemon,
			deletePokemon,
			showEditPokemon,
			handleChangeBox,
			handleChangeBoxFraq,
			checkedItems,
			checkedItemsFraq,
			pokemonDB,
			changeClass,
			activeClass,
			isEditing,
			handleEdit
		}}>
			{children}
		</PokemonContext.Provider>
	)
}

export default Pokemon;
