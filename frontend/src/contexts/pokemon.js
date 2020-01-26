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
	const [activeClass, setActiveClass] = useState('');

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
	//fim do formulario de cadastro

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
			handleChange,
			handleSubmit,
			savePokemon,
			handleChangeBox,
			handleChangeBoxFraq,
			checkedItems,
			checkedItemsFraq,
			pokemonDB,
			changeClass,
			activeClass
		}}>
			{children}
		</PokemonContext.Provider>
	)
}

export default Pokemon;
