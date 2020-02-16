export const AUTH_OPEN_FORM = 'AUTH_OPEN_FORM';
export const AUTH_CLOSE_FORM = 'AUTH_CLOSE_FORM';
export const AUTH_SEND_CADASTRO = 'AUTH_SEND_CADASTRO';
export const AUTH_SEND_CADASTRO_SUCCESS = 'AUTH_SEND_CADASTRO_SUCCESS';
export const AUTH_SEND_LOGIN = 'AUTH_SEND_LOGIN';
export const AUTH_SEND_LOGIN_SUCCESS = 'AUTH_SEND_LOGIN_SUCCESS';

export const authOpenForm = () => ({
	type: AUTH_OPEN_FORM
});

export const authCloseForm = () => ({
	type: AUTH_CLOSE_FORM,
	payload: {}
});

export const authSendCadastro = (payload) => ({
	type: AUTH_SEND_CADASTRO,
	payload
});

export const authSendCadastroSuccess = (payload) => ({
	type: AUTH_SEND_CADASTRO_SUCCESS,
	payload
});

export const authSendLogin = (payload) => ({
	type: AUTH_SEND_LOGIN,
	payload
});

export const authSendLoginSuccess = (mensagem, usuario) => ({
	type: AUTH_SEND_LOGIN_SUCCESS,
	payload: {
		mensagem,
		usuario
	}
});