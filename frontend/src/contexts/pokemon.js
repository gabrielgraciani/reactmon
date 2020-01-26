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

	const [pokemonDB, setPokemonDB] = useState([]);
	//pegar os dados de uma tabela no firestore
	useEffect(() => {
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
	}, [pokemonDB]);

	return(
		<PokemonContext.Provider value={{
			values,
			setValues,
			handleChange,
			handleSubmit,
			savePokemon,
			handleChangeBox,
			handleChangeBoxFraq,
			checkedItems,
			setCheckedItems,
			checkedItemsFraq,
			setCheckedItemsFraq,
			pokemonDB
		}}>
			{children}
		</PokemonContext.Provider>
	)
}

export default Pokemon;
