import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendItem} from "../redux/actions/item";


function Crud_Item(){
	const dispatch = useDispatch();

	const {saving} = useSelector(store => store.pokemon)

/*	useEffect(() => {
		if (!saving) {
			//dispatch
		}
	}, [saving]);*/

	const onSubmit = (e) => {
		e.preventDefault();
		const {nome, descricao} = e.target;
		console.log(nome.value, descricao.value);

		dispatch(sendItem({nome: nome.value, descricao: descricao.value}))
	};

	return(
		<form action="" onSubmit={onSubmit}>
			<input type="text" name="nome" placeholder="Nome" />
			<input type="text" name="descricao" placeholder="Descrição"/>
			<input type="submit" value="Enviar"/>
		</form>
	)
}

export default Crud_Item;