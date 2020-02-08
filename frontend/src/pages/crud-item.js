import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {itemSend} from "../redux/actions/item";
import Form from 'components/crud/item/formulario';
import Tabela from 'components/crud/item/tabela';


function Crud_Item(){
	const dispatch = useDispatch();

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
		</>


	)
}

export default Crud_Item;