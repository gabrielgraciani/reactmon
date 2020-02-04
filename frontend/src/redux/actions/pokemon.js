export const POKEMON_FETCH = 'POKEMON_FETCH';
export const POKEMON_FULFILLED = 'POKEMON_FULFILLED';
export const POKEMON_REJECTED = 'POKEMON_REJECTED';

export const pokemonFetch = () => ({
	type: POKEMON_FETCH,
	payload: {}
});

export const pokemonFulfilled = (list) => ({
	type: POKEMON_FULFILLED,
	payload: {
		list
	}
});
