export const POKEMON_FETCH = 'POKEMON_FETCH';
export const POKEMON_FULLFILLED = 'POKEMON_FULLFILLED';
export const POKEMON_REJECTED = 'POKEMON_REJECTED';

export const pokemonFetch = () => ({
	type: POKEMON_FETCH,
	payload: {}
});

export const pokemonFullfilled = (list) => ({
	type: POKEMON_FULLFILLED,
	payload: {
		list
	}
});
