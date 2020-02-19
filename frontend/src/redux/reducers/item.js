import * as actions from '../actions/item';

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
	funcao: '',
	saving: false,
	imagem: {
		name: '',
		url: ''
	},
	listSearch: []
};

export default function itemReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.ITEM_SEND:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.ITEM_SAVED_SUCCESS:
			return{
				...initialState,
				...state,
				list: [
					payload,
					...state.list
				],
				saving: false
			};

		case actions.ITEM_FETCH:
			return {
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.ITEM_FULLFILLED:
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

		case actions.ITEM_SHOW_EDIT:
			return {
				...initialState,
				...state,
				active: "active",
				data: [payload],
				isEditing: true,
			};

		case actions.ITEM_EDIT_FULLFILLED:
			return {
				...initialState,
				...state,
				...payload,
			};

		case actions.ITEM_DELETE:
			return {
				...initialState,
				...state,
				data: [payload],
			};

		case actions.ITEM_UPDATE:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.ITEM_UPDATE_LIST:
			return {
				...initialState,
				...state,
				list: [
					...payload.list
				],
				saving: false
			};

		case actions.ITEM_OPEN_FORM:
			return{
				...initialState,
				...state,
				active: "active"
			};

		case actions.ITEM_CLOSE_FORM:
			return{
				...initialState,
				...state,
				active: "",
				isEditing: false,
				payload: {
					nome: '',
					descricao: '',
					funcao: '',
					imagem: {
						name: '',
						url: ''
					}
				}
			};

		case actions.ITEM_FETCH_SEARCH:
			return{
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.ITEM_FETCH_SEARCH_SUCCESS:
			return{
				...initialState,
				...state,
				isLoading:false,
				listSearch:[
					...state.listSearch,
					...payload.listSearch
				]
			};

		default:
			return state;
	}
}
