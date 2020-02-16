import * as actions from '../actions/auth';

export const initialState = {
	nome: '',
	email: '',
	senha: '',
	active: '',
	data: [],
	saving: false,
	success: false,
	loading: false,
	mensagemErro: '',
	usuario: null,
	logout: false,
	checkUserLoggedIn: false,
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

		case actions.AUTH_SEND_LOGIN:
			return{
				...initialState,
				...state,
				data: [payload],
				loading: true
			};

		case actions.AUTH_SEND_LOGIN_SUCCESS:
			return{
				loading: false,
				mensagem: payload.mensagem,
				usuario: payload.usuario
			};

		case actions.AUTH_LOGOUT:
			return{
				...initialState,
				...state,
				logout: true
			};

		case actions.AUTH_LOGOUT_SUCCESS:
			return{
				...initialState,
				...state,
				logout: false,
				usuario: null
			};

		case actions.AUTH_CHECK_USER_LOGGED_IN:
			return{
				...initialState,
				...state,
				data: [payload]
			};

		case actions.AUTH_CHECK_USER_LOGGED_IN_SUCCESS:
			return{
				...initialState,
				...state,
				data: [payload],
				usuario: payload.usuario,
				checkUserLoggedIn: payload.checkUserLoggedIn
			};

		default:
			return state;
	}
}