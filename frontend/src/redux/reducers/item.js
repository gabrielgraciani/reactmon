import * as actions from '../actions/item';

export const initialState = {
	data: [],
	saving: false,
	list: [],
	isLoading: false
};

export default function itemReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.ITEM_SEND:
			/*console.log(payload);*/
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


		default:
			return state;
	}
}
