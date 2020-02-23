export const POKEMON_SEND = 'POKEMON_SEND';
export const POKEMON_SAVED_SUCCESS = 'POKEMON_SAVED_SUCCESS';
export const POKEMON_FETCH = 'POKEMON_FETCH';
export const POKEMON_FULLFILLED = 'POKEMON_FULLFILLED';
export const POKEMON_DELETE = 'POKEMON_DELETE';
export const POKEMON_SHOW_EDIT = 'POKEMON_SHOW_EDIT';
export const POKEMON_EDIT_FULLFILLED = 'POKEMON_EDIT_FULLFILLED';
export const POKEMON_OPEN_FORM = 'POKEMON_OPEN_FORM';
export const POKEMON_CLOSE_FORM = 'POKEMON_CLOSE_FORM';
export const POKEMON_UPDATE = 'POKEMON_UPDATE';
export const POKEMON_UPDATE_LIST = 'POKEMON_UPDATE_LIST';
export const POKEMON_FETCH_SEARCH = 'POKEMON_FETCH_SEARCH';
export const POKEMON_FETCH_SEARCH_SUCCESS = 'POKEMON_FETCH_SEARCH_SUCCESS';
export const POKEMON_SLUG_FETCH = 'POKEMON_SLUG_FETCH';
export const POKEMON_SLUG_FETCH_SUCCESS = 'POKEMON_SLUG_FETCH_SUCCESS';


export const pokemonSend = (payload) => ({
	type: POKEMON_SEND,
	payload
});

export const pokemonSavedSuccess = (payload) => ({
	type: POKEMON_SAVED_SUCCESS,
	payload
});

export const pokemonFetch = () => ({
	type: POKEMON_FETCH
});

export const pokemonFullFilled = (list, last, endInfiniteScroll) => ({
	type: POKEMON_FULLFILLED,
	payload: {
		list,
		last,
		endInfiniteScroll
	}
});

export const pokemonDelete = (payload) => ({
	type: POKEMON_DELETE,
	payload
});

export const pokemonShowEdit = (payload) => ({
	type: POKEMON_SHOW_EDIT,
	payload
});

export const pokemonEditFullFilled = (payload) => ({
	type: POKEMON_EDIT_FULLFILLED,
	payload: {
		payload
	}
});

export const pokemonOpenForm = () => ({
	type: POKEMON_OPEN_FORM
});

export const pokemonCloseForm = () => ({
	type: POKEMON_CLOSE_FORM,
	payload: {}
});

export const pokemonUpdate = (payload) => ({
	type: POKEMON_UPDATE,
	payload
});

export const pokemonUpdateList = (list) => ({
	type: POKEMON_UPDATE_LIST,
	payload: {
		list
	}
});

export const pokemonFetchSearch = () => ({
	type: POKEMON_FETCH_SEARCH
});

export const pokemonFetchSearchSuccess = (listSearch) => ({
	type: POKEMON_FETCH_SEARCH_SUCCESS,
	payload: {
		listSearch
	}
});

export const pokemonSlugFetch = (payload) => ({
	type: POKEMON_SLUG_FETCH,
	payload
});

export const pokemonSlugFetchSuccess = (listSlug) => ({
	type: POKEMON_SLUG_FETCH_SUCCESS,
	payload: {
		listSlug
	}
});