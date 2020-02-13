import * as actions from '../actions/item';

export const initialState = {
	active: '',
	data: [],
	isLoading: false,
	isEditing: false,
	list: [],
	saving: false,
	nome: '',
	descricao: '',
	last: ''
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
			console.log('payload', payload);
			return {
				...initialState,
				...state,
				list:[
					...state.list,
					...payload.list,
				],
				last: payload.last,
				isLoading: false,
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
			};

		case actions.ITEM_UPDATE_LIST:
			return {
				...initialState,
				...state,
				list: [
					...payload.list
				]
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
					descricao: ''
				}
			};

		default:
			return state;
	}
}
