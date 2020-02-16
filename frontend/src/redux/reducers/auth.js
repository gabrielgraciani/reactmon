import * as actions from '../actions/auth';

export const initialState = {
	active: '',
};


export default function itemReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.AUTH_OPEN_FORM:
			return{
				...initialState,
				...state,
				active: "active"
			};

		case actions.AUTH_CLOSE_FORM:
			return{
				...initialState,
				...state,
				active: "",
			};

		default:
			return state;
	}
}