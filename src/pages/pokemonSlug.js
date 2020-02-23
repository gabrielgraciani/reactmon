import React, {useEffect} from 'react';
import {pokemonSlugFetch} from "../redux/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";

function PokemonSlug({match}){

	const dispatch = useDispatch();
	const { listSlug } = useSelector(store => store.pokemon);

	const {id} = match.params;
	useEffect(() => {
		if(listSlug.length === 0){
			dispatch(pokemonSlugFetch(id));
		}
	}, [dispatch, listSlug.length, id]);

	console.log('listslug', listSlug);


	return(
		<div>
			{listSlug.map((item, index) => (
				<div key={index}>
					{item.nome}
				</div>
			))}
		</div>
	)
}

export default PokemonSlug