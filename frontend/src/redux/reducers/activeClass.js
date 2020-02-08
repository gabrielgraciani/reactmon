import * as actions from '../actions/activeClass';

export const initialState = {
	active: '',
};

export default function activeClassReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.ACTIVE_CLASS:
			return {
				...initialState,
				...state,
				active: "active"
			};

		default:
			return state;
	}
}
