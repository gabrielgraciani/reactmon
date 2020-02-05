import React from 'react';

function Crud_Item(){

	const onSubmit = (e) => {
		e.preventDefault();
		const {nome, descricao} = e.target;
		console.log(nome.value, descricao.value);
	}

	return(
		<form action="" onSubmit={onSubmit}>
			<input type="text" name="nome" placeholder="Nome" />
			<input type="text" name="descricao" placeholder="Descrição"/>
			<input type="submit" value="Enviar"/>
		</form>
	)
}

export default Crud_Item;