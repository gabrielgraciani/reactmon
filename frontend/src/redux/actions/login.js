export const LOGIN_OPEN_FORM = 'LOGIN_OPEN_FORM';
export const LOGIN_CLOSE_FORM = 'LOGIN_CLOSE_FORM';

export const loginOpenForm = () => ({
	type: LOGIN_OPEN_FORM
});

export const loginCloseForm = () => ({
	type: LOGIN_CLOSE_FORM,
	payload: {}
});