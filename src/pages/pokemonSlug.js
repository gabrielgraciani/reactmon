import React from 'react';

function PokemonSlug({match}){
	return(
		<div>oi {match.params.id}</div>
	)
}

export default PokemonSlug