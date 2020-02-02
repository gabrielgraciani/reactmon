import React, {createContext, useState, useEffect} from 'react';
import {db} from 'services/firebase';
import firebase from 'services/firebase';

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
	const [checkedItems, setCheckedItems] = useState([]);
	const [checkedItemsFraq, setCheckedItemsFraq] = useState([]);
	const [changeFile, setChangeFile] = useState([]);
	const [pokemonDB, setPokemonDB] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [activeClass, setActiveClass] = useState('');
	const [refreshTable, setRefreshTable] = useState(0);

	//começo para o fomulario de cadastro
	const changeClass = () => {
		setActiveClass(activeClass === '' ? 'active' : '', setValues(initialState), setCheckedItems([]), setCheckedItemsFraq([]));
	};

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleChangeBox = event => {
		setCheckedItems([
			...checkedItems,
			event.target.name
		]);
	};

	const handleChangeBoxFraq = event => {
		setCheckedItemsFraq([
			...checkedItemsFraq,
			event.target.name
		]);
	};

	const handleChangeFile = (e) => {
		setChangeFile(e.target.files[0]);
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

				//função para salvar as imagens
				saveImagePokemon(docRef.id);

			})
		} catch(e){
			console.log('erro ao salvar pokemon: ', e);
		}
	};

	const saveImagePokemon = (docRefId) =>{
		const storageRef = firebase.storage().ref();
		const file = changeFile;
		const metadata = {
			contentType: 'image/jpeg'
		};
		const uploadTask = storageRef.child('images/' + docRefId + '/' + file.name).put(file, metadata);

		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			function(snapshot) {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED:
						console.log('Upload is paused');
						break;
					case firebase.storage.TaskState.RUNNING:
						console.log('Upload is running');
						break;
					default:
						console.log('certo');
				}
			}, function(error) {

				switch (error.code) {
					case 'storage/unauthorized':
						break;

					case 'storage/canceled':
						break;

					case 'storage/unknown':
						break;
					default:
						console.log('erro');

				}
			}, function() {
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					console.log('File available at', downloadURL);

					db.collection('pokemon').doc(docRefId).update({
						imagem: downloadURL
					});
				});
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
		setCheckedItems([]);
		setCheckedItemsFraq([]);
		setRefreshTable(oldKey => oldKey + 1);
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

		db.collection("pokemon").where("id", "==", id).get().then(function(querySnapshot) {
			querySnapshot.forEach(function (doc) {
				console.log(doc.id, " => ", doc.data());
				const {id, nome, imagem, tipo, altura, peso, fraquezas, evolucoes} = doc.data();

				setCheckedItems(tipo);
				setCheckedItemsFraq(fraquezas);

				setValues({
					...values,
					id: id,
					nome: nome,
					imagem,
					tipo,
					altura: altura,
					peso: peso,
					fraquezas,
					evolucoes: evolucoes
				})
			});
		});

	};

	const handleEdit = (id) => {
		try{
			console.log(values);
			db.collection('pokemon').doc(id).update({
				nome: values.nome,
				imagem: values.imagem,
				altura: values.altura,
				evolucoes: values.evolucoes,
				peso: values.peso,
				tipo: checkedItems,
				fraquezas: checkedItemsFraq,
			});
			setValues(initialState);
			setCheckedItems([]);
			setCheckedItemsFraq([]);
			setRefreshTable(oldKey => oldKey + 1);
			changeClass();
			console.log('editado com sucesso');
		}
		catch(e){
			console.log('erro ao editar pokemon', e);
		}

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
			handleChangeFile,
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
