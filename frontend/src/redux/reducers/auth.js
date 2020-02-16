import * as actions from '../actions/auth';

export const initialState = {
	nome: '',
	email: '',
	senha: '',
	active: '',
	data: [],
	saving: false,
	success: false
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
				saving: false,
				success: false,
				payload: {
					nome: '',
					email: '',
					senha: ''
				}
			};

		case actions.AUTH_SEND_CADASTRO:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.AUTH_SEND_CADASTRO_SUCCESS:
			return{
				...initialState,
				...state,
				saving: false,
				success: true
			};

		default:
			return state;
	}
}