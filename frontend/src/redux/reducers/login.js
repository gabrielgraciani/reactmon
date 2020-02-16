import * as actions from '../actions/login';

export const initialState = {
	active: '',
};


export default function itemReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.LOGIN_OPEN_FORM:
			return{
				...initialState,
				...state,
				active: "active"
			};

		case actions.LOGIN_CLOSE_FORM:
			return{
				...initialState,
				...state,
				active: "",
			};

		default:
			return state;
	}
}