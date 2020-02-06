import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemSend, itemFetch} from "../redux/actions/item";


function Crud_Item(){
	const dispatch = useDispatch();

	const { list, isLoading } = useSelector(store => store.pokemon);
	console.log("list", list);

	useEffect(() => {
		dispatch(itemFetch());
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

		{list.map(item => (
				<div>{item.nome}</div>
			))}
		</>
	)
}

export default Crud_Item;