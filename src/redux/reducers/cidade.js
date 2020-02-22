import * as actions from '../actions/cidade';

export const initialState = {
	active: '',
	data: [],
	endInfiniteScroll: false,
	isLoading: false,
	isEditing: false,
	last: '',
	list: [],
	nome: '',
	descricao: '',
	saving: false,
	imagem: {
		name: '',
		url: ''
	},
	listSearch: []
};

export default function cidadeReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.CIDADE_SEND:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.CIDADE_SAVED_SUCCESS:
			return{
				...initialState,
				...state,
				list: [
					payload,
					...state.list
				],
				listSearch: [
					payload,
					...state.listSearch
				],
				saving: false
			};

		case actions.CIDADE_FETCH:
			return {
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.CIDADE_FULLFILLED:
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

		case actions.CIDADE_SHOW_EDIT:
			return {
				...initialState,
				...state,
				active: "active",
				data: [payload],
				isEditing: true,
			};

		case actions.CIDADE_EDIT_FULLFILLED:
			return {
				...initialState,
				...state,
				...payload,
			};

		case actions.CIDADE_DELETE:
			return {
				...initialState,
				...state,
				data: [payload],
			};

		case actions.CIDADE_UPDATE:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.CIDADE_UPDATE_LIST:
			return {
				...initialState,
				...state,
				list: [
					...payload.list
				],
				saving: false
			};

		case actions.CIDADE_OPEN_FORM:
			return{
				...initialState,
				...state,
				active: "active"
			};

		case actions.CIDADE_CLOSE_FORM:
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

		case actions.CIDADE_FETCH_SEARCH:
			return{
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.CIDADE_FETCH_SEARCH_SUCCESS:
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
