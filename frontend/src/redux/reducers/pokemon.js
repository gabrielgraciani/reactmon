import * as actions from '../actions/pokemon';

export const initialState = {
	active: '',
	data: [],
	endInfiniteScroll: false,
	isLoading: false,
	isEditing: false,
	last: '',
	list: [],
	nome: '',
	tipo: [],
	altura: '',
	peso: '',
	fraquezas: [],
	evolucoes: '',
	saving: false,
	imagem: {
		name: '',
		url: ''
	},
	listSearch: []
};

export default function pokemonReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.POKEMON_SEND:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.POKEMON_SAVED_SUCCESS:
			return{
				...initialState,
				...state,
				list: [
					payload,
					...state.list
				],
				saving: false
			};

		case actions.POKEMON_FETCH:
			return {
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.POKEMON_FULLFILLED:
			return {
				...initialState,
				...state,
				endInfiniteScroll: payload.endInfiniteScroll,
				isLoading: false,
				last: payload.last,
				list:[
					...state.list,
					...payload.list,
				],
			};

		case actions.POKEMON_SHOW_EDIT:
			return {
				...initialState,
				...state,
				active: "active",
				data: [payload],
				isEditing: true,
			};

		case actions.POKEMON_EDIT_FULLFILLED:
			return {
				...initialState,
				...state,
				...payload,
			};

		case actions.POKEMON_DELETE:
			return {
				...initialState,
				...state,
				data: [payload],
			};

		case actions.POKEMON_UPDATE:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.POKEMON_UPDATE_LIST:
			return {
				...initialState,
				...state,
				list: [
					...payload.list
				],
				saving: false
			};

		case actions.POKEMON_OPEN_FORM:
			return{
				...initialState,
				...state,
				active: "active"
			};

		case actions.POKEMON_CLOSE_FORM:
			return{
				...initialState,
				...state,
				active: "",
				isEditing: false,
				payload: {
					nome: '',
					descricao: '',
					imagem: {
						name: '',
						url: ''
					}
				}
			};

		case actions.POKEMON_FETCH_SEARCH:
			return{
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.POKEMON_FETCH_SEARCH_SUCCESS:
			return{
				...initialState,
				...state,
				isLoading:false,
				listSearch:[
					...payload.listSearch
				]
			};

		default:
			return state;
	}
}
