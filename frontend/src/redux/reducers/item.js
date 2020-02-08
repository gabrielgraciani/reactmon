import * as actions from '../actions/item';

export const initialState = {
	data: [],
	saving: false,
	isLoading: false,
	list: []
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
					...state.list,
					payload
				],
				saving: false
			};

		case actions.ITEM_FETCH:
			return {
				...initialState,
				...state,
				list: [],
				isLoading: true
			};

		case actions.ITEM_FULLFILLED:
			return {
				...initialState,
				...state,
				...payload,
				isLoading: false
			};

		case actions.ITEM_DELETE:
			return {
				...initialState,
				...state,
				data: [payload],
			};


		default:
			return state;
	}
}
