import React from 'react';
import {useSelector} from "react-redux";

const NomeUser = () => {

	const {usuario} = useSelector(store => store.auth);
	const nome = usuario.displayName;

	return (
		<div className="titulo">
			<h1>Olá {nome}</h1>
		</div>
	)
};

export default NomeUser;