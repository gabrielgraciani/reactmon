import * as actions from '../actions/item';

export const initialState = {
	data: []
};

export default function pokemonReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.SEND_ITEM:
			/*console.log(payload);*/
			return {
				...initialState,
				...state,
				data: [payload],
			};


		default:
			return state;
	}
}
