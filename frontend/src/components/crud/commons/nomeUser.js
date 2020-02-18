import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const NomeUser = () => {

	const {usuario} = useSelector(store => store.auth);

	const [nome, setNome] = useState('');

	useEffect(() => {
		if(usuario){
			setNome(usuario.displayName || '');
		}
	}, [usuario]);

	return (
		<div className="titulo">
			<h1>Olá {nome}</h1>
		</div>
	)
};

export default NomeUser;