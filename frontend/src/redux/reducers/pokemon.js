import * as actions from '../actions/pokemon';

export const initialState = {
	isLoading: false,
	list: []
};

export default function pokemonReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.POKEMON_FETCH:
			return {
				...initialState,
				...state,
				list: [],
				isLoading: true
			};

		case actions.POKEMON_FULLFILLED:
			return {
				...initialState,
				...state,
				...payload,
				isLoading: false
			};

		default:
			return state;
	}
}
