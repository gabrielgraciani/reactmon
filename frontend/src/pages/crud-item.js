import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemSend, itemFetch} from "../redux/actions/item";
import CircularProgress from '@material-ui/core/CircularProgress';
import Form from 'components/crud/item/formulario';
import Tabela from 'components/crud/item/tabela';


function Crud_Item(){
	const dispatch = useDispatch();

	const { list, isLoading } = useSelector(store => store.item);
	console.log("list", list);

	useEffect(() => {
		if(list.length === 0){
			dispatch(itemFetch());
		}
	}, [isLoading]);

	const onSubmit = (e) => {
		e.preventDefault();
		const {nome, descricao} = e.target;
		console.log(nome.value, descricao.value);

		dispatch(itemSend({nome: nome.value, descricao: descricao.value}))
	};

	return(
		<>

		<div id="wrap_crud">
			<div className="indent">
				<div className="titulo">
					<h1>Olá teste</h1>
				</div>

				<Tabela />

			</div>
		</div>

		<Form />



		<form action="" onSubmit={onSubmit}>
			<input type="text" name="nome" placeholder="Nome" />
			<input type="text" name="descricao" placeholder="Descrição"/>
			<input type="submit" value="Enviar"/>
		</form>

		{isLoading && (
			<CircularProgress size={25} />
		)}
		{list.map((item, index) => (
				<div key={index}>{item.nome}</div>
			))}
		</>


	)
}

export default Crud_Item;