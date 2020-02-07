import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemSend, itemFetch} from "../redux/actions/item";
import CircularProgress from '@material-ui/core/CircularProgress';


function Crud_Item(){
	const dispatch = useDispatch();

	const { data, isLoading } = useSelector(store => store.item);
	console.log("list", data.length);

	useEffect(() => {
		if(data.length === 0){
			dispatch(itemFetch());
		}
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		const {nome, descricao} = e.target;
		console.log(nome.value, descricao.value);

		dispatch(itemSend({nome: nome.value, descricao: descricao.value}))
	};

	return(
		<>
		<form action="" onSubmit={onSubmit}>
			<input type="text" name="nome" placeholder="Nome" />
			<input type="text" name="descricao" placeholder="Descrição"/>
			<input type="submit" value="Enviar"/>
		</form>

		{isLoading && (
			<CircularProgress size={25} />
		)}
		{data.map((item, index) => (
				<div key={index}>{item.nome}</div>
			))}
		</>
	)
}

export default Crud_Item;