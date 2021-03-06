export const AUTH_OPEN_FORM = 'AUTH_OPEN_FORM';
export const AUTH_CLOSE_FORM = 'AUTH_CLOSE_FORM';
export const AUTH_SEND_CADASTRO = 'AUTH_SEND_CADASTRO';
export const AUTH_SEND_CADASTRO_SUCCESS = 'AUTH_SEND_CADASTRO_SUCCESS';
export const AUTH_SEND_LOGIN = 'AUTH_SEND_LOGIN';
export const AUTH_SEND_LOGIN_SUCCESS = 'AUTH_SEND_LOGIN_SUCCESS';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_CHECK_USER_LOGGED_IN = 'AUTH_CHECK_USER_LOGED_IN';
export const AUTH_CHECK_USER_LOGGED_IN_SUCCESS = 'AUTH_CHECK_USER_LOGED_IN_SUCCESS';
export const AUTH_LOGIN_GITHUB = 'AUTH_LOGIN_GITHUB';

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

export const authSendCadastroSuccess = (mensagem, success, payload) => ({
	type: AUTH_SEND_CADASTRO_SUCCESS,
	payload: {
		mensagem,
		success,
		payload
	}
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

export const authLogout = () => ({
	type: AUTH_LOGOUT,
});

export const authLogoutSuccess = () => ({
	type: AUTH_LOGOUT_SUCCESS,
});

export const authCheckUserLoggedIn = () => ({
	type: AUTH_CHECK_USER_LOGGED_IN
});

export const authCheckUserLoggedInSuccess = (usuario, checkUserLoggedIn) => ({
	type: AUTH_CHECK_USER_LOGGED_IN_SUCCESS,
	payload: {
		usuario,
		checkUserLoggedIn
	}
});

export const authLoginGithub = () => ({
	type: AUTH_LOGIN_GITHUB
});